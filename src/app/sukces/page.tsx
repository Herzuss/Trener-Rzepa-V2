import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-yellow-500/5">
        {/* Wielki, satysfakcjonujący checkmark */}
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400/10 mb-6">
          <svg
            className="h-12 w-12 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h1 className="font-anton uppercase text-4xl md:text-5xl text-zinc-100 tracking-tight mb-4">
          PŁATNOŚĆ <span className="text-yellow-400">ZAAKCEPTOWANA</span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg mb-8">
          Witamy w zespole. To najlepsza inwestycja w siebie, jaką mogłeś
          dzisiaj zrobić.
        </p>

        {/* Instrukcja co dalej */}
        <div className="bg-zinc-950 rounded-xl p-6 text-left border border-zinc-800/50 mb-8">
          <h3 className="text-zinc-100 font-bold uppercase tracking-wider text-sm mb-4">
            Co dzieje się teraz?
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">1.</span>
              <span className="text-sm text-zinc-400">
                Na podany adres e-mail wysłaliśmy potwierdzenie zamówienia oraz
                rachunek od Stripe.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">2.</span>
              <span className="text-sm text-zinc-400">
                Wkrótce otrzymasz kolejną wiadomość z ankietą lub bezpośrednio
                ze swoim indywidualnym planem (sprawdź folder SPAM, na wszelki
                wypadek).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">3.</span>
              <span className="text-sm text-zinc-400">
                W razie jakichkolwiek pytań, śmiało uderzaj do mnie na
                Instagramie @kuba.rz
              </span>
            </li>
          </ul>
        </div>

        {/* Przycisk powrotu */}
        <Link
          href="/"
          className="inline-flex w-full items-center justify-center rounded-xl font-semibold uppercase text-lg sm:text-xl transition-all duration-300 tracking-tighter text-zinc-950 bg-yellow-400 hover:bg-yellow-300 py-4"
        >
          Wracam na stronę główną
        </Link>
      </div>
    </main>
  );
}
