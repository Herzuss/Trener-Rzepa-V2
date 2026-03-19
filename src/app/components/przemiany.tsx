"use client";

import { useState } from "react";
import Image from "next/image";

export default function Przemiany() {
  // Nasz przełącznik. Na start jest "false" czyli wylaczony
  const [pokazWszystkie, setPokazWszystkie] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-10 text-center md:text-left">
        <p className="text-zinc-100 text-xs font-bold tracking-wider uppercase mb-2">
          // dowód skuteczności
        </p>
        <h2 className="font-anton uppercase text-3xl sm:text-4xl md:text-5xl tracking-tighter text-zinc-100">
          Efekty <span className="text-yellow-200">współpracy</span>
        </h2>
        <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left mt-5">
          To nie magia, to systematyczna praca i dobrze dobrana strategia.{" "}
          <br /> Zobacz efekty moich podopiecznych.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* divy ktore zawsze sa widoczne */}
        <div className="border border-zinc-800 bg-zinc-900 rounded-3xl flex flex-col">
          <Image
            src={"/przemiana%201.png"}
            alt="zdjecie przemiany"
            width={519}
            height={381}
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-row justify-between px-4 py-4">
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-lg text-zinc-100">Czas</p>
              <p className="font-anton uppercase text-zinc-100 text-2xl">
                4 miesiące
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-lg text-zinc-100">Waga</p>
              <p className="font-anton uppercase text-yellow-200 text-2xl">
                -10kg
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold text-lg text-zinc-100">Cel</p>
              <p className="font-anton uppercase text-zinc-100 text-2xl">
                Redukcja
              </p>
            </div>
          </div>
        </div>
        <div className="border border-zinc-800 bg-zinc-900 rounded-3xl"></div>
        {/* po tym momencie dopiero jak pokazWszystkie jest ustawiony na true sie pokaza  */}
        {pokazWszystkie && (
          <>
            <div className="border border-zinc-800 bg-zinc-900 rounded-3xl"></div>
            <div className="border border-zinc-800 bg-zinc-900 rounded-3xl"></div>
          </>
        )}
      </div>

      {/* przycisk ktory pokazuje reszte ustawiajac pokazwszystkie na true */}
      {!pokazWszystkie && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setPokazWszystkie(true)}
            className="border border-zinc-700 text-zinc-100 px-12 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-yellow-400 hover:text-zinc-950 transition-colors duration-300 cursor-pointer"
          >
            Pokaż więcej
          </button>
        </div>
      )}
      {/* przycisk ktory robi na odwrot czyli pokazuje mniej */}
      {pokazWszystkie && (
        <div className="flex justify-center mt-12">
          <button
            className="border border-zinc-700 text-zinc-100 px-12 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-yellow-400 hover:text-zinc-950 transition-colors duration-300 cursor-pointer"
            onClick={() => setPokazWszystkie(false)}
          >
            Pokaż mniej
          </button>
        </div>
      )}
    </section>
  );
}
