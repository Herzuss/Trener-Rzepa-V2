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
                Wkrótce otrzymasz kolejną wiadomość z ankietą (sprawdź folder SPAM, na wszelki
                wypadek).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">3.</span>
              <span className="text-sm text-zinc-400">
                W razie jakichkolwiek pytań, śmiało pisz do mnie na
                Instagramie @kuba.rz
              </span>
            </li>
          </ul>
        </div>

        {/* Przycisk powrotu */}
        <Link
          href="/"
          className="group relative inline-flex w-full h-14 sm:h-16 items-center justify-center overflow-hidden rounded-xl font-semibold xl:font-bold uppercase text-xl sm:text-2xl transition-all duration-300 cursor-pointer tracking-tighter shadow-[0_4px_20px_0] md:shadow-[0_4px_30px_0] shadow-yellow-500/20 text-zinc-950 bg-yellow-300 border-2 border-yellow-200 hover:bg-yellow-200 hover:shadow-yellow-500/40"
        >
          Wracam na stronę główną
          <div className="w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="0.8"></path>
            </svg>
          </div>
        </Link>
      </div>
    </main>
  );
}
