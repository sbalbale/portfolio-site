# Cloudflare Turnstile Setup

Cloudflare Turnstile has been integrated into the contact form to prevent spam submissions.

## Environment Variables Required

Add these to your `.env.local` (web app) and deployment environment:

### Frontend (apps/web/.env.local)
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
```

### Backend (apps/web/.env.local)
```
TURNSTILE_SECRET_KEY=your_secret_key_here
```

## Getting Your Keys

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Account Home → **Turnstile**
3. Click **Create Site**
4. Configure:
   - **Site name**: Your site name (e.g., "Portfolio Contact")
   - **Domain**: Your domain (e.g., `seanbalbale.com`)
   - **Mode**: Choose Managed (recommended)
5. Copy the **Site Key** and **Secret Key**
6. Add them to your environment variables

## How It Works

1. The contact form displays a Turnstile challenge widget
2. User completes the challenge
3. Turnstile returns a token
4. The token is sent to the `/api/send` endpoint
5. The API verifies the token with Cloudflare
6. Only if verification succeeds are the emails sent

## Testing

- **Development**: The widget will work in localhost with test keys
- **Production**: Use your actual Cloudflare keys

## Files Modified

- `apps/web/src/components/Contact.tsx` - Added Turnstile widget
- `apps/web/src/app/api/send/route.ts` - Added token verification
- `apps/web/package.json` - Added `react-turnstile` dependency
