"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

function Form({ kwota }: { kwota: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Nowy stan do trzymania adresu e-mail
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Magia: automatycznie pobiera Twoją obecną domenę i dokleja /sukces
        return_url: `${window.location.origin}/sukces`,

        receipt_email: email,
        payment_method_data: {
          billing_details: {
            email: email,
          },
        },
      },
    });

    if (error) {
      setErrorMessage(error.message || "Wystąpił nieoczekiwany błąd.");
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-md mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl"
    >
      {/* --- NASZE WŁASNE POLE NA E-MAIL --- */}
      <div className="flex flex-col gap-2 mb-2">
        <label
          htmlFor="email"
          className="text-sm text-zinc-400 font-bold uppercase tracking-wider"
        >
          Adres e-mail <span className="text-yellow-400">*</span>
        </label>
        <p className="text-xs text-zinc-500 mb-1">
          Na ten adres otrzymasz swój plan treningowy.
        </p>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="twoj@email.com"
          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
        />
      </div>

      {/* --- BRAMKA STRIPE --- */}
      <PaymentElement options={{ layout: "tabs" }} />

      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}

      <button
        disabled={isLoading || !stripe || !elements}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-lg py-4 rounded-xl transition-colors disabled:opacity-50"
      >
        {isLoading ? "Przetwarzanie..." : `ZAPŁAĆ ${kwota} PLN`}
      </button>
    </form>
  );
}

export default function CheckoutWrapper({ kwota }: { kwota: number }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: kwota * 100 }), // Mnożymy x100 (grosze)
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [kwota]);

  if (!clientSecret)
    return (
      <p className="text-zinc-400 text-center animate-pulse">
        Łączenie z bezpieczną bramką...
      </p>
    );

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret, appearance: { theme: "night" } }}
    >
      <Form kwota={kwota} />
    </Elements>
  );
}
