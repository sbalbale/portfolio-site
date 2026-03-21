import { NextResponse } from "next/server";
import { Resend } from "resend";
import { client } from "../../../../lib/sanity";
import { getSiteSettingsQuery } from "../../../../lib/queries";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    // Internal notification HTML
    const internalHtml = `
      <div style="font-family: monospace; background-color: #000; color: #fff; padding: 40px; border: 1px solid #333;">
        <h2 style="color: #00e5ff; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #333; padding-bottom: 10px;">Contact Payload Received</h2>
        <p style="color: #888; font-size: 12px; margin-bottom: 30px;">ORIGIN: SEANBALBALE.COM</p>
        <div style="margin-bottom: 20px;">
          <strong style="color: #00e5ff; display: block; text-transform: uppercase; font-size: 10px;">Sender</strong>
          <span style="font-size: 18px;">${name}</span>
        </div>
        <div style="margin-bottom: 20px;">
          <strong style="color: #00e5ff; display: block; text-transform: uppercase; font-size: 10px;">Return Path</strong>
          <span style="font-size: 18px;">${email}</span>
        </div>
        <div style="margin-bottom: 30px; padding: 20px; background: #111; border-left: 2px solid #00e5ff;">
          <strong style="color: #00e5ff; display: block; text-transform: uppercase; font-size: 10px; margin-bottom: 10px;">Message Content</strong>
          <p style="line-height: 1.6; margin: 0;">${message}</p>
        </div>
        <p style="color: #444; font-size: 10px; text-align: center; border-top: 1px solid #222; padding-top: 20px;">END OF TRANSMISSION</p>
      </div>
    `;

    // Automated success receipt HTML (adaptive dark mode)
    const receiptHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>
          :root { color-scheme: light dark; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace; margin: 0; padding: 0; background-color: #ffffff; color: #111111; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 30px; }
          .logo { font-size: 32px; font-weight: 800; letter-spacing: -1px; margin-bottom: 30px; }
          .accent { color: #00e5ff; }
          .body-text { font-size: 15px; line-height: 1.7; color: #555555; margin-bottom: 24px; }
          .response-box { background: #f5f5f5; border-left: 3px solid #00e5ff; padding: 16px 20px; margin: 30px 0; }
          .response-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #999999; margin-bottom: 6px; }
          .response-time { font-size: 22px; font-weight: 700; letter-spacing: 1px; color: #111111; }
          .divider { border: none; border-top: 1px solid #e0e0e0; margin: 30px 0; }
          .footer { font-size: 11px; color: #999999; text-transform: uppercase; letter-spacing: 1px; line-height: 1.8; }
          .footer a { color: #00e5ff; text-decoration: none; }

          @media (prefers-color-scheme: dark) {
            body { background-color: #000000 !important; color: #ffffff !important; }
            .body-text { color: #aaaaaa !important; }
            .response-box { background: #111111 !important; }
            .response-time { color: #ffffff !important; }
            .divider { border-top-color: #222222 !important; }
            .footer { color: #666666 !important; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">SB<span class="accent">.</span></div>

          <p class="body-text">
            Hello ${name}, your communication has been successfully routed to my inbox. I will review the details shortly.
          </p>

          <div class="response-box">
            <div class="response-label">Estimated Response</div>
            <div class="response-time">24 — 48 HOURS</div>
          </div>

          <p class="body-text">
            Thank you for reaching out. If your inquiry is urgent, feel free to reply directly to this email.
          </p>

          <hr class="divider" />

          <div class="footer">
            Sean Balbale<br />
            Electrical &amp; Computer Engineering / CS<br />
            <a href="https://seanbalbale.com">seanbalbale.com</a>
          </div>
        </div>
      </body>
      </html>
    `;

    // Fetch email settings from Sanity
    const siteSettings = await client.fetch(getSiteSettingsQuery);
    const destinationEmail = siteSettings?.contactEmail || "seanbalbale@gmail.com";
    const sendingEmail = siteSettings?.sendEmail || "contact@seanbalbale.com";
    const senderName = siteSettings?.name || "Sean Balbale";
    const fromAddress = `${senderName} <${sendingEmail}>`;

    // Fire both emails in parallel
    const [internal, receipt] = await Promise.all([
      resend.emails.send({
        from: fromAddress,
        to: [destinationEmail],
        replyTo: email,
        subject: `New Message from ${name}`,
        html: internalHtml,
      }),
      resend.emails.send({
        from: fromAddress,
        to: [email],
        replyTo: sendingEmail,
        subject: `Message Received — ${senderName}`,
        html: receiptHtml,
      }),
    ]);

    if (internal.error || receipt.error) {
      return NextResponse.json(
        { error: internal.error || receipt.error },
        { status: 400 },
      );
    }

    return NextResponse.json({ data: { internal: internal.data, receipt: receipt.data } });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
