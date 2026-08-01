import {serve} from 'https://deno.land/std@0.224.0/http/server.ts';
import {createHmac} from 'node:crypto';
serve(async(req)=>{const{razorpay_order_id,razorpay_payment_id,razorpay_signature}=await req.json();const secret=Deno.env.get('RAZORPAY_KEY_SECRET')!;const expected=createHmac('sha256',secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');return Response.json({verified:expected===razorpay_signature})});
