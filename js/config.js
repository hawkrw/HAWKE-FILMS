// HAWKE FILMS — independent Supabase connection. Never use CINEVA credentials here.
export const SUPABASE_URL = "https://bbhhpoxlfpaugsztjtbl.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6gkjU1OFlz0AAi_B4_gSvg_sCgSy_-H";
export const APP_CONFIG = Object.freeze({name:"HAWKE FILMS",version:"1.0.0",moviesTable:"movies",seriesTable:"series",episodesTable:"episodes",categoriesTable:"categories"});
let createClient;
try { ({createClient}=await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm")); }
catch (error) { console.warn("Primary Supabase CDN failed; using fallback.",error); ({createClient}=await import("https://esm.sh/@supabase/supabase-js@2")); }
export const supabase=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
