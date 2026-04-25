"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const items = [
  "6+ LAT DOŚWIADCZENIA",
  "CERTYFIKAT EQF3/4",
  "30+ PODOPIECZNYCH",
];

const MarqueeBlock = () => (
  <div className="flex w-max items-center">
    {items.map((text, idx) => (
      <div key={idx} className="flex items-center pr-8 sm:pr-10 md:pr-12">
        <span className="font-anton text-md sm:text-lg md:text-xl tracking-tighter text-zinc-400">
          {text}
        </span>
        <div className="ml-8 sm:ml-10 md:ml-12">
          <Image
            src={"/zap.svg"}
            alt="zap"
            width={24}
            height={24}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </div>
      </div>
    ))}
  </div>
);

export default function Hero() {
  return (
    <>
      {/* Marquee – wjeżdża z góry */}
      <motion.section
        className="w-full py-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="mx-auto flex w-full max-w-225 overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee">
            <MarqueeBlock />
            <MarqueeBlock />
            <MarqueeBlock />
            <MarqueeBlock />
          </div>
        </div>
      </motion.section>

      <section className="relative flex items-center justify-center mb-10 xs:mb-10">

        {/* Napis RZEPA w tle – BEZ ANIMACJI, widoczny od razu */}
        <Image
          src={"/RZEPA.svg"}
          alt="napis"
          width={1666}
          height={120}
          unoptimized={true}
          className="absolute z-0 opacity-80 xs:opacity-60 blur-[1px] xs:blur-[2px] mt-66 xs:mt-0"
          priority
          fetchPriority="high"
        />
        <Image
          src={"/RZEPA.svg"}
          alt="napis"
          width={1666}
          height={120}
          unoptimized={true}
          className="absolute z-0 -mt-40 opacity-80 blur-[1px] xs:blur-[2px] xs:hidden"
          priority
          fetchPriority="high"
        />

        {/* Glow */}
        <div className="w-40 h-48 md:w-80 md:h-96 absolute bg-[radial-gradient(circle,#328C97_74%,#53EAFD80_89%)] blur-[100px] opacity-5 md:opacity-20"></div>

        {/* Zdjęcie trenera – wjeżdża z dołu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-2/3 sm:w-1/3 z-10 mt-5"
        >
          <Image
            src={"/zdjecie rzepy do sekcji hero.webp"}
            alt="sylwetka rzepy bez tla"
            priority
            fetchPriority="high"
            width={501}
            height={681}
            sizes="(max-width: 640px) 70vw, 33vw"
            className="w-full h-auto object-cover mask-[linear-gradient(to_bottom,white_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]"
          />
        </motion.div>

        {/* Tytuł h1 – wjeżdża z góry */}
        <motion.h1
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-anton text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase absolute text-zinc-50 text-stroke-0 sm:text-stroke-1 text-stroke-zinc-950 z-10 text-shadow-lg/50 text-shadow-zinc-950 -mt-10 md:-mt-48 xl:-mt-56 text-center leading-18"
        >
          Twoja droga do <span className="text-yellow-200">formy</span> życia
        </motion.h1>

        {/* Podtytuł – wjeżdża z dołu */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-semibold text-center text-zinc-200 text-sm md:text-lg lg:text-xl xl:text-2xl absolute z-10 text-shadow-zinc-950 text-shadow-lg mt-40 md:-mt-10 md:leading-10"
        >
          Sprawdzone metody, zero lania wody i konkretne wyniki.{" "}
          <br className="hidden sm:block" />
          Dołącz do ekipy, która zamienia wymówki na życiową formę
        </motion.h2>

        {/* CTA – pojawia się ostatni */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute z-10 mt-75"
        >
          <Link href="#oferta">
            <button className="bg-yellow-300 group relative inline-flex w-48 h-12 sm:w-56 sm:h-16 items-center justify-center overflow-hidden rounded-md font-semibold xl:font-bold uppercase text-2xl sm:text-3xl transition-all duration-300 cursor-pointer tracking-tighter shadow-[0_4px_20px_0] md:shadow-[0_4px_30px_0] shadow-zinc-600 md:shadow-zinc-500 hover:bg-yellow-200 hover:shadow-yellow-500/40 text-zinc-950 border-2 border-yellow-200">
              przemiana
              <div className="w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
