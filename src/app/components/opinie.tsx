import Image from "next/image";

export default function Opinie() {
  return (
    <section id="opinie" className="relative w-full overflow-hidden bg-zinc-950 py-20 flex flex-col gap-6">
      <div className="pointer-events-none absolute -bottom-[20%] -right-[10%] z-0 rounded-full h-100 w-100 blur-[60px] md:h-200 md:w-200 md:blur-[120px] bg-[radial-gradient(circle,rgba(254,240,138,0.25)_0%,transparent_70%)] transform-gpu translate-z-0 will-change-transform"></div>
      <div className="flex w-max animate-scroll-left">
        <div className="flex gap-6 pr-6">
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "No to ogólnie plan mega fajny kompatybilny z tym co mam na
                swojej siłowni, ćwiczenia fajnie dobrane bez męczenia danej
                parti przez cały trening ogólnie bardzo fajnie polecam 💯💯"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia1avatar.jpg"}
                alt="avatar osoby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Dominik Mazurek</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Siemka! <br /> Dzięki za mega treningi i fajny plan treningowy
                <br />
                Ps Już pierwsze postępy są 😉"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia2avatar.png"}
                alt="opinia 2 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Katarzyna Wiśniewska</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Siemanko, ćwiczy mi się na tym planie naprawdę dobrze,
                najlepszy plan jaki miałem. Wszystko jest dobrze wytłumaczone, a
                filmiki, które mi dałeś, bardzo mi pomogły. Na każdym treningu
                czuję taką pompę jak nigdy"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia3avatar.jpg"}
                alt="opinia 3 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Jakub Rychlicki</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Mogę już powiedzieć, że pierwszy trening był mega i dobrze
                wszedł! Brzuch czuję do dzisiaj (drugi dzień po), abs z
                kółeczkiem dał w kość 🥲 <br />
                Ale jestem (już kolejny raz) mega zadowolony z planu 🫡"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia4avatar.jpg"}
                alt="opinia 4 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Szymon Babel</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 pr-6">
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "No to ogólnie plan mega fajny kompatybilny z tym co mam na
                swojej siłowni, ćwiczenia fajnie dobrane bez męczenia danej
                parti przez cały trening ogólnie bardzo fajnie polecam 💯💯"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia1avatar.jpg"}
                alt="avatar osoby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Dominik Mazurek</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Siemka! <br /> Dzięki za mega treningi i fajny plan treningowy
                <br />
                Ps Już pierwsze postępy są 😉"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia2avatar.png"}
                alt="opinia 2 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Katarzyna Wiśniewska</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                {" "}
                "Siemanko, ćwiczy mi się na tym planie naprawdę dobrze,
                najlepszy plan jaki miałem. Wszystko jest dobrze wytłumaczone, a
                filmiki, które mi dałeś, bardzo mi pomogły. Na każdym treningu
                czuję taką pompę jak nigdy"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia3avatar.jpg"}
                alt="opinia 3 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Jakub Rychlicki</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Mogę już powiedzieć, że pierwszy trening był mega i dobrze
                wszedł! Brzuch czuję do dzisiaj (drugi dzień po), abs z
                kółeczkiem dał w kość 🥲 <br />
                Ale jestem (już kolejny raz) mega zadowolony z planu 🫡"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia4avatar.jpg"}
                alt="opinia 4 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Szymon Babel</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-max animate-scroll-right">
        <div className="flex gap-6 pr-6">
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Serio, trenuje mi się dobrze! Progres jest, ciężar większy.
                Sylwetkowo też jest klasa. Tak jak mówiłeś białeczko uzupełniam
                każdego dnia, trzymam lekką nadwyżkę kaloryczną i ważę już 80kg
                (a zaczynałem z 72-73kg)!"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia5avatar.jpg"}
                alt="opinia 5 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Jakub *****</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Szczerze mówiąc super, ogólnie bardzo fajne ćwiczenia. Po
                prostu dobrze się ćwiczy tym planem! W poprzednim po chwili
                miałem coś takiego, że nie chciało mi się robić tych ćwiczeń, a
                tu sprawia mi to czystą przyjemność."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia6avatar.jpg"}
                alt="opinia 6 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Fabian Ogrodnik</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Siema! Mega duży progres! Mam strasznie dużo siły, co było nie
                do pomyślenia kilka miesięcy temu. Bardzo miło i przyjemnie
                trenuje mi się z planem widzę coraz lepsze wyniki i progres
                sylwetkowy."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia1avatar.jpg"}
                alt="avatar osoby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Mateusz Kaczmarek</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Cześć! Dzięki za ten plan. Najlepszy, jaki miałam! Filmiki
                instruktarzowe mega ułatwiły technikę w końcu robię ćwiczenia
                poprawnie i bezpiecznie. Po miesiącu już widzę różnicę w
                sylwetce! Dzięki za motywację i stały kontakt 🫡 Cieszę się, że
                do Ciebie trafiłam."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia1avatar.jpg"}
                alt="avatar osoby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Dominika Schulz</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 pr-6">
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                {" "}
                "Serio, trenuje mi się dobrze! Progres jest, ciężar większy.
                Sylwetkowo też jest klasa. Tak jak mówiłeś białeczko uzupełniam
                każdego dnia, trzymam lekką nadwyżkę kaloryczną i ważę już 80kg
                (a zaczynałem z 72-73kg)!"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia5avatar.jpg"}
                alt="opinia 5 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Jakub *****</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Szczerze mówiąc super, ogólnie bardzo fajne ćwiczenia. Po
                prostu dobrze się ćwiczy tym planem! W poprzednim po chwili
                miałem coś takiego, że nie chciało mi się robić tych ćwiczeń, a
                tu sprawia mi to czystą przyjemność."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia6avatar.jpg"}
                alt="opinia 6 avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Fabian Ogrodnik</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Siema! Mega duży progres! Mam strasznie dużo siły, co było nie
                do pomyślenia kilka miesięcy temu. Bardzo miło i przyjemnie
                trenuje mi się z planem widzę coraz lepsze wyniki i progres
                sylwetkowy."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia1avatar.jpg"}
                alt="avatar osoby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Mateusz Kaczmarek</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
          <div className="w-96 h-64 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 text-zinc-100 mb-4">★★★★★</div>
              <p className="text-zinc-300 text-sm">
                "Cześć! Dzięki za ten plan. Najlepszy, jaki miałam! Filmiki
                instruktarzowe mega ułatwiły technikę w końcu robię ćwiczenia
                poprawnie i bezpiecznie. Po miesiącu już widzę różnicę w
                sylwetce! Dzięki za motywację i stały kontakt 🫡 Cieszę się, że
                do Ciebie trafiłam."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/opinia1avatar.jpg"}
                alt="avatar osoby"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xs text-zinc-400">
                <p className="text-zinc-100 font-bold">Dominika Schulz</p>
                <p>Plan treningowy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 md:h-48 bg-linear-to-t from-zinc-950 to-transparent z-0"></div>
    </section>
  );
}
