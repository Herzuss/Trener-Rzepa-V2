"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
// Upewnij się, że ta ścieżka dokładnie odpowiada miejscu, gdzie masz formularz:
import CheckoutWrapper from "@/app/components/CheckoutForm";

function CheckoutContent() {
  const searchParams = useSearchParams();

  // Zczytujemy kwotę prosto z paska adresu URL. Jeśli brakuje, dajemy 199.
  const kwotaParam = searchParams.get("kwota");
  const kwota = kwotaParam ? Number(kwotaParam) : 199;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 text-center">
        <h1 className="font-anton uppercase text-4xl text-zinc-100 tracking-tight">
          DOKOŃCZ <span className="text-yellow-400">ZAMÓWIENIE</span>
        </h1>
        <p className="text-zinc-400 mt-2">
          Bezpieczna płatność obsługiwana przez Stripe.
        </p>
      </div>

      {/* Wyświetlamy wizualne potwierdzenie kwoty, żeby klient był pewien */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">
          Do zapłaty
        </p>
        <p className="text-4xl font-anton text-white tracking-tight">
          {kwota} PLN
        </p>
      </div>

      <CheckoutWrapper kwota={kwota} />

      <div className="text-center mt-8">
        <a
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-wider font-bold"
        >
          ← Wróć na stronę główną
        </a>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      {/* Suspense jest absolutnie wymagany w Next.js przy użyciu useSearchParams */}
      <Suspense
        fallback={
          <p className="text-yellow-400 animate-pulse font-bold tracking-widest">
            ŁADOWANIE BRAMKI...
          </p>
        }
      >
        <CheckoutContent />
      </Suspense>
    </main>
  );
}
