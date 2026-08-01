import {serve} from 'https://deno.land/std@0.224.0/http/server.ts';
serve(async(req)=>{const{message,language='mr'}=await req.json();const disclaimer=language==='en'?'Please verify official information with the Gram Panchayat office.':'अधिकृत माहिती ग्रामपंचायत कार्यालयाकडून पडताळा करा.';return Response.json({reply:`${message}\n\n${disclaimer}`})});
