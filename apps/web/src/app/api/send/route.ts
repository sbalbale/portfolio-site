import { NextResponse } from "next/server";
import { Resend } from "resend";
import { client } from "../../../../lib/sanity";
import { getSiteSettingsQuery } from "../../../../lib/queries";

// Initialize Resend
// In a true production environment, this should map to process.env.RESEND_API_KEY
const resend = new Resend(
  process.env.RESEND_API_KEY || "re_dummy_fallback_key",
);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required configuration payloads" },
        { status: 400 },
      );
    }

    const siteSettings = await client.fetch(getSiteSettingsQuery);
    const destinationEmail =
      siteSettings?.contactEmail || "contactform@seanbalbale.com";
    const sendingEmail =
      siteSettings?.sendEmail || "contactform@seanbalbale.com";

    const { data, error } = await resend.emails.send({
      from: sendingEmail,
      to: [destinationEmail],
      subject: `New Architectural Connection: ${name}`,
      text: `Identifier: ${name}\nRelay Node: ${email}\n\nPayload:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
