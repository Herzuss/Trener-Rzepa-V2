"use client";

import Image from "next/image";
import { useState } from "react";

export default function Omnie() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative mx-auto max-w-screen-3xl mt-10 bg-[url('/omnie%20tlo.png')] bg-cover bg-center bg-no-repeat px-4 xs:px-0 z-20 ml-8 mr-8 md:ml-20 md:mr-20">
      <div className="relative flex flex-col-reverse md:flex-row gap-10 sm:gap-20 justify-center items-center">
        <div className="relative flex-none aspect-527/795 w-full max-w-131.75 max-h-198.75 rounded-3xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 z-0 mx-auto md:mx-0">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/nagranie.mp4" type="video/mp4" />
          </video>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 z-10 bg-yellow-400/60 backdrop-blur-md border border-zinc-700/50 text-zinc-100 p-3 rounded-full hover:bg-yellow-200 hover:text-zinc-950 transition-colors"
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-zinc-100 text-xs font-bold tracking-wider mb-5 text-center md:text-left uppercase">
            // Profil trenera
          </p>
          <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-tighter text-zinc-100 mb-5 text-center md:text-left">
            TRENER. <br /> ZAWODNIK. <br />{" "}
            <span className="text-yellow-200">PASJONAT.</span>
          </h2>
          <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left mt-5 sm:mt-10">
            Dla mnie kulturystyka to nie 'sport na weekend', to styl życia,
            który hartuje <br className="hidden md:block" /> charakter. Jako
            czynny zawodnik wiem, ile pracy kosztuje każdy kilogram{" "}
            <br className="hidden md:block" /> mięśni i jak smakuje walka ze
            słabościami.
          </p>
          <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left mt-14">
            Tę samą pasję i sceniczną precyzję przelewam na Twoje plany. Nie
            dostajesz <br className="hidden md:block" /> suchej teorii z
            książek, tylko metody przetestowane na żywym organizmie.{" "}
            <br className="hidden md:block" /> Budujemy Twoją formę na moich
            doświadczeniach.
          </p>
          <Image
            src={"/podpisrzepy.svg"}
            alt="podpis"
            height={279}
            width={255}
            unoptimized={true}
            className="self-center pt-10 mt-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
