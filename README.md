# HAWKE FILMS

An independent streaming platform built with HTML, CSS, JavaScript, Supabase and Cloudflare.

## Project boundaries

- GitHub repository: `hawkrw/HAWKE-FILMS`
- Supabase project: `bbhhpoxlfpaugsztjtbl`
- CINEVA4 is used strictly as a read-only reference for layout and feature ideas.
- Do not modify the CINEVA repository, database, credentials, storage or deployment as part of HAWKE FILMS work.

## Current foundation

- Premium responsive homepage with dynamic featured title, latest movies, latest series, search and database-driven categories.
- Movie and series catalog pages.
- Watch page with separate playback and download links.
- Movie parts: up to five, each with its own title, watch URL and download URL.
- Series episodes with independent watch and download URLs.
- Admin sign-in and protected dashboard with overview, movies, series, categories, visitor analytics and settings.
- Upload posters/backdrops from a phone or computer into the dedicated `hawke-media` Supabase Storage bucket.
- Daily anonymous visitor counting; unique visitor IDs are stored in the visitor's browser.
- Cloudflare security headers and crawler restrictions for admin pages.

## Supabase setup

The frontend connects only to this project's publishable key in `js/config.js`. Never put a service-role or secret key in frontend files.

Tables created in this project: `admins`, `categories`, `movies`, `series`, `episodes`, `site_visits`, and `platform_settings`. RLS is enabled. The media bucket is `hawke-media`.

### Create the first administrator

1. Open this HAWKE-FILMS project's Supabase Dashboard.
2. Go to Authentication → Users and create the administrator account.
3. Open SQL Editor and run `supabase/setup-admin.sql`, replacing `YOUR_ADMIN_EMAIL@example.com` with that exact account email.
4. Visit `/admin/` and sign in.

Admin dashboard refresh intentionally ends the admin session and requires a fresh sign-in.

## Cloudflare Pages deployment

1. Create a Pages project and connect GitHub repository `hawkrw/HAWKE-FILMS`.
2. Production branch: `main`.
3. Framework preset: None.
4. Build command: leave empty.
5. Build output directory: `.` (repository root).
6. Deploy. Add your custom domain in Cloudflare Pages when ready.

## Content-link safety

- Your supplied playback URL is stored in `video_url` (or `parts[].watch_url` / `episodes.video_url`).
- Your supplied download URL is stored separately in `download_url` (or the matching part/episode download field).
- TMDB is intended for metadata and poster/backdrop images only. Never overwrite playback or download URLs during metadata enrichment.

## Current setup status

Database schema and policies are installed. Eight default categories are seeded. Movie, series, episode and admin records are currently empty until you add content and authorize the first admin.
