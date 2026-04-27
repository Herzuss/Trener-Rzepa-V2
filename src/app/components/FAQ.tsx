"use client";
import { useState } from "react";
const faqData = [
  {
    question: "Opłaciłem zamówienie. Co dzieje się dalej?",
    answer:
      "Po zaksięgowaniu płatności, skontaktuję się z Tobą w ciągu 24-48 godzin i wyślę ankietę do wypełnienia (pytania o Twój staż, sprzęt, tryb życia i sylwetkę). Gdy ją odeślesz, zabieram się do pracy.",
  },
  {
    question: "Ile będę czekać na swój plan treningowy?",
    answer:
      "Plan to nie gotowiec, układam go od zera pod Ciebie. Gotowy materiał otrzymasz maksymalnie do 7 dni roboczych od odesłania mi wypełnionej ankiety.",
  },
  {
    question:
      "Czy prowadzenie na 1 miesiąc to subskrypcja, która zje mi kasę z konta w kolejnym miesiącu?",
    answer:
      "Nie. Płatność jest jednorazowa. Jeśli po miesiącu będziesz chciał przedłużyć współpracę, zrobisz to świadomie, kupując pakiet na nowo.",
  },
  {
    question: "Jakie są opcje płatności?",
    answer:
      "Opcje płatności to: karta, BLIK, Google Pay, Apple Pay. Wszystko odbywa się przez bezpieczną platformę Stripe, więc nie musisz się martwić o swoje dane.",
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="w-full mx-auto max-w-7xl px-4 md:px-8 py-24">
      <div className="mb-10 text-center md:text-left">
        <p className="text-zinc-100 text-xs font-bold tracking-wider uppercase mb-2">
          // FAQ
        </p>
        <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-tighter text-zinc-100">
          Masz jakieś <span className="text-yellow-200">pytania?</span>
        </h2>
        <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left mt-5">
          Szkoda czasu na domysły. Tutaj znajdziesz konkrety dotyczące
          współpracy, diety i płatności.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col border-t border-zinc-800">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="w-full border-b border-zinc-800 bg-zinc-950 transition-colors"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-6 focus:outline-none"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex items-center gap-4">
                <span className="text-yellow-400 font-bold text-lg">
                  {idx + 1}.
                </span>
                <span className="text-zinc-200 text-lg text-left">
                  {item.question}
                </span>
              </div>
              <span className="text-2xl text-yellow-400 transition-transform duration-200">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            <div
              className={`px-16 pb-6 text-zinc-300 text-sm md:text-base transition-all duration-300 overflow-hidden ${
                openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
