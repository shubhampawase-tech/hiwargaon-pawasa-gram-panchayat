import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
serve(async(req)=>{const payload=await req.json();/* Connect approved SMS/email/WhatsApp providers here. Secrets stay in Supabase. */return new Response(JSON.stringify({accepted:true,channels:payload.channels||['in_app']}),{headers:{'content-type':'application/json'}})});
