import Image from "next/image";

export default function Cooferuje() {
  return (
    <section className="relative w-full bg-[url('/tlo%20do%20sekcji%20co%20otrzymujesz.png')] bg-cover bg-center py-24">
      {/* Gradient – rozciągnięty na całą szerokość, wycentrowany */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gradient sekcja co otrzymujesz.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      <div className="ml-10 mr-10 md:ml-24 md:mr-24">
        <div className="mb-10">
          <p className="text-zinc-100 text-xs font-bold tracking-wider mb-5 text-center md:text-left">
            // CO OTRZYMUJESZ?
          </p>
          <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-tighter text-zinc-100 mb-5 text-center md:text-left">
            kompletny <span className="text-yellow-200">system</span>, nie tylko
            rozpiska
          </h2>
          <p className="font-medium text-zinc-400 tracking-normal text-sm md:text-base text-center md:text-left">
            Cztery filary skutecznej współpracy. <br /> Sprawdź, co dokładnie
            otrzymasz po dołączeniu do zespołu
          </p>
        </div>
        <div className="grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-6">
          <div className="row-span-1 col-span-1 md:col-span-2 border border-zinc-800 relative md:flex md:flex-row overflow-hidden rounded-4xl bg-linear-65 from-zinc-900 from-50% to-zinc-950 to-100% ">
            <div className="md:pl-10 relative z-10">
              <h3
                className="text-2xl md:text-3xl mx-auto md:mx-0 w-fit text-zinc-100 font-anton uppercase border-b border-yellow-200 mt-5 sm:mt-10 xl
            :mt-20 xl:text-nowrap text-center md:text-left"
              >
                indywidualne podejscie
              </h3>
              <p className="text-md md:text-base text-zinc-400 font-medium mt-10 md:mt-20 xl:text-nowrap px-4 md:px-0 text-center md:text-left">
                Analizuję Twój cel, czas i możliwości. To nie jest gotowiec z
                szuflady, tylko strategia <br /> treningowa uszyta na miarę
                Twojego życia.
              </p>
            </div>
            <Image
              src={"/cel.svg"}
              alt="ikonka celownika"
              width={512}
              height={512}
              className="ml-10 md:-ml-32 xl:ml-0 absolute bottom-0 right-0 z-0"
            />
          </div>
          <div className="row-span-1 col-span-1 border border-zinc-800 relative md:flex md:flex-row overflow-hidden rounded-4xl bg-linear-65 from-zinc-900 from-50% to-zinc-950 to-100%">
            <div className="md:pl-10 relative z-10">
              <h3 className="text-2xl md:text-3xl mx-auto md:mx-0 w-fit text-zinc-100 font-anton uppercase border-b border-yellow-200 mt-5 sm:mt-10 xl:text-nowrap text-center md:text-left">
                Kontakt 24/7
              </h3>
              <p className="text-md md:text-base text-zinc-400 font-medium mt-10 md:mt-20 xl:text-nowrap px-4 md:px-0 text-center md:text-left">
                Masz pytanie? Piszesz. Nie zostawiam Cię samego z <br />{" "}
                problemami.
              </p>
            </div>
            <Image
              src={"/wiadomosci.svg"}
              alt="ikonka dymku wiadomosci"
              width={379}
              height={379}
              className="ml-10 md:-ml-32 xl:ml-0 absolute bottom-0 right-0 z-0 h-62.5 w-62.5 xs:w-full xs:h-full"
            />
          </div>
          <div className="row-span-1 col-span-1 border border-zinc-800 relative md:flex md:flex-row overflow-hidden rounded-4xl bg-linear-65 from-zinc-900 from-50% to-zinc-950 to-100%">
            <div className="md:pl-10 relative z-10">
              <h3 className="text-2xl md:text-3xl mx-auto md:mx-0 w-fit text-zinc-100 font-anton uppercase border-b border-yellow-200 mt-5 sm:mt-10 md:text-nowrap text-center md:text-left">
                dopasowanie
              </h3>
              <p className="text-md md:text-base text-zinc-400 font-medium mt-10 md:mt-20 xl:text-nowrap px-4 md:px-0 text-center md:text-left">
                Siłownia czy dom? Dostosuję ćwiczenia pod to, co <br /> masz pod
                ręką.
              </p>
            </div>
            <Image
              src={"/hantel.svg"}
              alt="ikonka dymku wiadomosci"
              width={240}
              height={240}
              className="ml-10 md:-ml-32 xl:ml-0 absolute bottom-0 right-0 z-0"
            />
          </div>
          <div className="row-span-1 col-span-1 md:col-span-2 border border-zinc-800 relative md:flex md:flex-row overflow-hidden rounded-4xl bg-linear-65 from-zinc-900 from-50% to-zinc-950 to-100% ">
            <div className="md:pl-10 relative z-10">
              <h3
                className="text-2xl md:text-3xl mx-auto md:mx-0 w-fit text-zinc-100 font-anton uppercase border-b border-yellow-200 mt-5 sm:mt-10 xl
            :mt-20 xl:text-nowrap text-center md:text-left"
              >
                Strategia żywieniowa
              </h3>
              <p className="text-md md:text-base text-zinc-400 font-medium mt-10 md:mt-20 xl:text-nowrap px-4 md:px-0 text-center md:text-left pb-20 md:pb-40">
                Obliczone makro i kalorie. Wiesz co jeść, żeby budować mięśnie i
                mieć energię na <br /> treningu, bez głodówek i skomplikowanych
                przepisów.
              </p>
            </div>
            <Image
              src={"/piorun.svg"}
              alt="ikonka celownika"
              width={512}
              height={512}
              className="ml-10 md:-ml-32 xl:ml-0 absolute bottom-0 right-0 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
