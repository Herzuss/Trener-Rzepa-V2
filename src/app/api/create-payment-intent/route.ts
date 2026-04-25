import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const pakiet = body.pakiet as string;

    const ceny: Record<string, number> = {
      plan: 19900, // 199 PLN
      opieka: 29900, // 299 PLN
    };

    const amount = ceny[pakiet];

    if (!amount) {
      return NextResponse.json(
        { error: "Nieprawidłowy pakiet" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Kwota w groszach, wyliczona na serwerze
      currency: "pln",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Błąd Stripe:", error);
    return NextResponse.json({ error: "Błąd płatności" }, { status: 500 });
  }
}
