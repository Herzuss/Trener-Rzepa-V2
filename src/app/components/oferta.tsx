"use client";

import { useRouter } from "next/navigation";

export default function Oferta() {
  const router = useRouter();

  return (
    <section id="oferta" className="mx-auto max-w-7xl px-4 xs:px-8">
      <div className="mb-10 text-center md:text-left">
        <p className="text-zinc-100 text-xs font-bold tracking-wider uppercase mb-2">
          // inwestycja w siebie
        </p>
        <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-tighter text-zinc-100">
          wybierz swoją <span className="text-yellow-200">drogę</span> do celu
        </h2>
        <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left mt-5">
          Niezależnie od budżetu i doświadczenia, <br />
          mam plan, który dowiezie wynik.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative justify-center items-center lg:items-stretch mx-auto mt-8">
        {/* ======================= KARTA 1 ======================= */}
        <div className="relative border border-yellow-400 bg-zinc-900 shadow-[inset_0px_4px_40px] shadow-yellow-500/10 w-full max-w-[24rem] rounded-2xl flex flex-col p-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-zinc-950 font-bold px-4 py-1.5 rounded-full text-xs tracking-wider uppercase whitespace-nowrap">
            Najczęściej wybierany
          </div>

          <div className="relative justify-center items-center flex flex-col border-b border-zinc-800 pb-6">
            <h2 className="font-anton uppercase text-4xl text-zinc-100 mt-4 tracking-tight text-center">
              indywidualny plan treningowy
            </h2>
            <p className="text-zinc-400 text-sm mt-3 tracking-tight text-center">
              Strategia dobrana pod Twój sprzęt i cel
            </p>

            <div className="flex flex-col items-center mt-6">
              <div className="flex items-center gap-2">
                <span className="text-lg text-zinc-500 line-through font-medium">
                  250 PLN
                </span>
                <span className="text-[10px] font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 px-2 py-1 rounded-full uppercase tracking-widest">
                  -51 PLN
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <p className="font-anton text-6xl text-zinc-100 tracking-tight">
                  199
                </p>
                <p className="font-manrope text-zinc-400 uppercase text-lg">
                  pln
                </p>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-4 text-left mt-8 mb-8">
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-300">
                <strong className="text-zinc-100 font-semibold">
                  Indywidualny dobór ćwiczeń
                </strong>{" "}
                pod Twój sprzęt i cel sylwetkowy
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-300">
                <strong className="text-zinc-100 font-semibold">
                  Dokładne wytyczne:
                </strong>{" "}
                tempo, powtórzenia, serie i RIR
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-300">
                <strong className="text-zinc-100 font-semibold">
                  Pełne wyjaśnienie techniki
                </strong>{" "}
                wykonywania zaplanowanych ćwiczeń
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-300">
                <strong className="text-zinc-100 font-semibold">
                  Zdrowy rozwój i progres
                </strong>{" "}
                z naciskiem na prewencję przeciążeń
              </span>
            </li>
          </ul>

          <button
            onClick={() => router.push("/checkout?pakiet=plan")}
            className="mt-auto w-full group relative inline-flex h-14 sm:h-16 items-center justify-center overflow-hidden rounded-xl font-semibold xl:font-bold uppercase text-2xl sm:text-3xl transition-all duration-300 cursor-pointer tracking-tighter shadow-[0_4px_20px_0] md:shadow-[0_4px_30px_0] shadow-yellow-500/20 text-zinc-950 bg-yellow-300 border-2 border-yellow-200 hover:bg-yellow-200 hover:shadow-yellow-500/40"
          >
            KUP TERAZ
            <div className="w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="0.8"></path>
              </svg>
            </div>
          </button>
        </div>

        {/* ======================= KARTA 2 ======================= */}
        <div className="relative border border-zinc-800 bg-zinc-900/40 shadow-[inset_0px_4px_40px] shadow-zinc-950/80 w-full max-w-[24rem] rounded-2xl flex flex-col p-8">
          <div className="relative justify-center items-center flex flex-col border-b border-zinc-800/80 pb-6">
            <h2 className="font-anton uppercase text-4xl text-zinc-100 mt-4 tracking-tight text-center">
              prowadzenie indywidualne
            </h2>
            <p className="text-zinc-400 text-sm mt-3 tracking-tight text-center">
              Pełna opieka trenerska i stały kontakt
            </p>

            <div className="flex flex-col items-center mt-6">
              <span className="text-[10px] font-bold bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 px-3 py-1 rounded-full uppercase tracking-widest mb-1">
                Pakiet na 1 miesiąc
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <p className="font-anton text-6xl text-zinc-100 tracking-tight">
                  299
                </p>
                <p className="font-manrope text-zinc-500 uppercase text-lg">
                  pln
                </p>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-4 text-left mt-8 mb-8">
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-400">
                Wszystko to, co w planie obok, oraz{" "}
                <strong className="text-zinc-200 font-semibold">
                  stała opieka trenerska 1:1
                </strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-400">
                <strong className="text-zinc-200 font-semibold">
                  Nielimitowany kontakt
                </strong>{" "}
                i bieżąca motywacja (Messenger/Instagram)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-400">
                <strong className="text-zinc-200 font-semibold">
                  Cotygodniowe raporty:
                </strong>{" "}
                analiza wagi, sylwetki i korekty w makro/kaloriach
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-sm text-zinc-400">
                <strong className="text-zinc-200 font-semibold">
                  Bieżąca analiza techniki
                </strong>{" "}
                na podstawie Twoich nagrań z treningu
              </span>
            </li>
          </ul>

          <button
            onClick={() => router.push("/checkout?pakiet=opieka")}
            className="mt-auto w-full group relative inline-flex h-14 sm:h-16 items-center justify-center overflow-hidden rounded-xl font-semibold xl:font-bold uppercase text-xl sm:text-2xl transition-all duration-300 cursor-pointer tracking-tighter text-zinc-300 bg-transparent border-2 border-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-500"
          >
            KUP TERAZ
            <div className="w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="0.8"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
