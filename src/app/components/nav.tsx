"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-zinc-950/85 border-b border-zinc-800 sticky backdrop-blur-sm top-0 z-50">
      {/* Dodana klasa relative, aby lista UL wiedziała względem czego się środkować */}
      <div className="flex flex-row justify-between items-center px-6 md:px-24 py-4 md:py-2 relative">
        {/* LOGO (Lewa strona) */}
        <Link className="inline-block relative z-50" href="/">
          <Image src={"/logo.svg"} alt="Logo marki" width={110} height={70} />
        </Link>

        {/* KONTENER NA DESKTOPIE (Prawa strona), NA MOBILE (Nakładka na cały ekran) */}
        <div
          onClick={() => setIsOpen(false)}
          className={cn(
            "hidden md:flex md:flex-row md:items-center",
            isOpen &&
              "absolute top-18 left-0 w-full h-[calc(100dvh-72px)] z-40 flex flex-col justify-center items-center gap-10 bg-zinc-950/90 backdrop-blur-3xl is-menu-open",
          )}
        >
          {/* LISTA LINKÓW (Na środku na desktopie, w kolumnie na mobile) */}
          <ul
            className={cn(
              "flex flex-col justify-center items-center gap-16",
              // Magia centrowania na desktopie:
              "md:flex-row md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2",
            )}
          >
            <li>
              <Link
                onClick={handleCloseMenu}
                className="text-xl md:text-base text-zinc-100 font-extrabold tracking-tighter hover:text-yellow-400 transition duration-300"
                href="/#przemiany"
              >
                Efekty
              </Link>
            </li>
            <li>
              <Link
                onClick={handleCloseMenu}
                href="/#opinie"
                className="text-xl md:text-base text-zinc-100 tracking-tighter font-extrabold hover:text-yellow-400 transition duration-300"
              >
                Opinie
              </Link>
            </li>
            <li>
              <Link
                onClick={handleCloseMenu}
                href="/#oferta"
                className="text-xl md:text-base text-zinc-100 tracking-tighter font-extrabold hover:text-yellow-400 transition duration-300"
              >
                Oferta
              </Link>
            </li>
          </ul>

          {/* PRZYCISK CTA (Na desktopie układa się do prawej krawędzi) */}
          <Link
            href="/#oferta"
            onClick={handleCloseMenu}
            className="bg-yellow-300 group relative inline-flex w-44 h-12 items-center justify-center overflow-hidden rounded-md font-semibold xl:font-bold  uppercase text-2xl transition-all duration-300 cursor-pointer tracking-tighter shadow-[0_4px_30px_0] shadow-zinc-500/60 hover:bg-yellow-200 hover:shadow-yellow-500/40 text-zinc-950 border-2 border-yellow-200"
          >
            Przemiana
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
                ></path>
              </svg>
            </div>
          </Link>
        </div>

        {/* PRZYCISK HAMBURGER MENU */}
        <button
          className="space-y-3 md:hidden relative z-50 p-2"
          onClick={handleToggleOpen}
          aria-label="Menu"
        >
          <span
            className={cn(
              "h-0.5 w-8 bg-zinc-200 block rounded-lg transition-transform",
              isOpen && "-translate-x-1",
            )}
          ></span>
          <span
            className={cn(
              "h-0.5 w-8 bg-zinc-200 block rounded-lg transition-transform",
              isOpen && "translate-x-1",
            )}
          ></span>
        </button>
      </div>
    </nav>
  );
}
