-- HAWKE FILMS: create the first administrator safely.
-- 1) Create the admin user's account in Supabase Dashboard > Authentication > Users.
-- 2) Replace the email below with that exact email address and run this SQL.
-- 3) This SQL is for the HAWKE-FILMS project ONLY.
insert into public.admins(user_id,email)
select id,email from auth.users where lower(email)=lower('YOUR_ADMIN_EMAIL@example.com')
on conflict(user_id) do update set email=excluded.email;
