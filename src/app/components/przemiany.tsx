"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PrzemyanaCardProps = {
  src: string;
  czas: string;
  waga: string;
  cel: string;
};

function PrzemyanaCard({ src, czas, waga, cel }: PrzemyanaCardProps) {
  return (
    <div className="group border border-zinc-800 bg-zinc-900 rounded-3xl flex flex-col overflow-hidden shadow-[0_8px_30px_0] shadow-yellow-400/10 hover:shadow-[0_12px_40px_0] hover:shadow-yellow-400/25 hover:border-yellow-400/30 transition-all duration-500 hover:-translate-y-1">
      {/* Zdjęcie z etykietami – stały aspect ratio żeby karty były równe */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt="zdjecie przemiany"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Etykiety START / OBECNIE */}
        <span className="absolute bottom-3 left-3 bg-yellow-400 text-zinc-950 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Start
        </span>
        <span className="absolute bottom-3 right-3 bg-yellow-400 text-zinc-950 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Obecnie
        </span>
      </div>

      {/* Pasek statystyk */}
      <div className="flex flex-row items-stretch bg-zinc-950/60 border-t border-zinc-800 divide-x divide-zinc-800">
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-4 gap-1">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Czas</p>
          <p className="font-anton uppercase text-zinc-100 text-xl tracking-tight">{czas}</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-4 gap-1">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Waga</p>
          <p className="font-anton uppercase text-yellow-300 text-xl tracking-tight">{waga}</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-4 gap-1">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Cel</p>
          <p className="font-anton uppercase text-zinc-100 text-xl tracking-tight">{cel}</p>
        </div>
      </div>
    </div>
  );
}

export default function Przemiany() {
  const [pokazWszystkie, setPokazWszystkie] = useState(false);

  return (
    <section
      className="w-full mx-auto max-w-7xl px-4 md:px-8 py-24"
      id="przemiany"
    >
      <div className="mb-10 text-center md:text-left">
        <p className="text-zinc-100 text-xs font-bold tracking-wider uppercase mb-2">
          // dowód skuteczności
        </p>
        <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-tighter text-zinc-100">
          Efekty <span className="text-yellow-200">współpracy</span>
        </h2>
        <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left mt-5">
          To nie magia, to systematyczna praca i dobrze dobrana strategia.{" "}
          <br /> Zobacz efekty moich podopiecznych.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Karty zawsze widoczne */}
        <PrzemyanaCard
          src="/przemiana4.png"
              czas="3 miesiące"
              waga="-5kg"
              cel="Redukcja"
        />
        <PrzemyanaCard
          src="/przemiana1.png"
          czas="4 miesiące"
          waga="-10kg"
          cel="Redukcja"
        />

        {/* Karty widoczne po kliknięciu "Pokaż więcej" */}
        {pokazWszystkie && (
          <>
            <PrzemyanaCard
              src="/przemiana2.png"
              czas="3 miesiące"
              waga="+4kg"
              cel="Masa"
            />
            <PrzemyanaCard
              src="/przemiana3.png"
          czas="6 miesięcy"
          waga="+7kg"
          cel="Masa"
            />
          </>
        )}
      </div>

      {/* CTA po zdjęciach przemiany */}
      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="text-zinc-400 text-sm font-medium">Twoja przemiana może być następna.</p>
        <Link
          href="/#oferta"
          className="bg-yellow-300 group relative inline-flex w-56 h-14 items-center justify-center overflow-hidden rounded-md font-bold uppercase text-xl transition-all duration-300 cursor-pointer tracking-tighter shadow-[0_4px_20px_0] shadow-yellow-500/20 text-zinc-950 border-2 border-yellow-200 hover:bg-yellow-200 hover:shadow-yellow-500/40"
        >
          Zacznij przemianę
          <div className="w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="0.8"></path>
            </svg>
          </div>
        </Link>
      </div>

      {/* Przycisk Pokaż więcej / mniej */}
      <div className="mt-6 flex justify-center">
        {!pokazWszystkie ? (
          <button
            onClick={() => setPokazWszystkie(true)}
            className="border border-zinc-700 text-zinc-100 w-56 h-14 text-xl rounded-md font-bold uppercase tracking-wide hover:bg-yellow-400 hover:border-yellow-400 hover:text-zinc-950 transition-all duration-300 cursor-pointer"
          >
            Pokaż więcej
          </button>
        ) : (
          <button
            onClick={() => {
              setPokazWszystkie(false);
              document.getElementById("przemiany")?.scrollIntoView({
                behavior: "instant",
              });
            }}
            className="border border-zinc-700 text-zinc-100 w-56 h-14 text-xl rounded-md font-bold uppercase tracking-wide hover:bg-yellow-400 hover:border-yellow-400 hover:text-zinc-950 transition-all duration-300 cursor-pointer"
          >
            Pokaż mniej
          </button>
        )}
      </div>
    </section>
  );
}
