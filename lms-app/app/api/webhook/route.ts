import Stripe from "stripe";
import { headers } from "next/headers" 
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import axios from "axios";

export async function POST(req:Request) {

    //console.log("request:", req);

    const body = await req.text()
    const signature = headers().get("Stripe-Signature") as string

    //console.log(body)
    //console.log(signature)

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    
        //console.log("stripe_event", event);
        
    } catch (error: any) {
        //console.log("stripe payment error: ", error);
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400})
    }
    
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session?.metadata?.userId
    const courseId = session?.metadata?.courseId

    //console.log("event_type: ", event.type);
    //console.log("api post request: ", `${process.env.BACK_END_URL}/api/courses/${courseId}/user/${userId}/purchased`);

    if(event.type === "checkout.session.completed"){
        if(!userId || !courseId){
            return new NextResponse("Webhook Error: Missing metadata", {status: 400})
        }

        //console.log(event.type);

        //console.log("api post request: ", `${process.env.BACK_END_URL}/api/courses/${courseId}/user/${userId}/purchased`)

        await axios.post(`${process.env.BACK_END_URL}/api/courses/${courseId}/user/${userId}/purchased`)

    }else{
        return new NextResponse(`Webhook Error : unhandled event type ${event.type}`,{ status: 200})
    }

    return new NextResponse(null, { status: 200})

}