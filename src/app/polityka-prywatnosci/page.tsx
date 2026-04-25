import Nav from "../components/nav";
import Footer from "../components/Footer";

export default function PolitykaPrywatnosci() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-300">
            <Nav />
            <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
                <h1 className="text-5xl md:text-7xl text-center font-anton uppercase tracking-tight text-zinc-100 mb-8 mt-10">
                    Polityka Prywatności
                </h1>
                
                <div className="space-y-12 font-sans text-lg leading-relaxed">
                    <p className="text-xl md:text-2xl text-zinc-400 text-center max-w-3xl mx-auto mb-16">
                        Szanujemy Twoją prywatność. Ta polityka krótko i na temat wyjaśnia, co dzieje się z Twoimi danymi, gdy korzystasz z naszej strony. Żadnego prawniczego bełkotu, same konkrety.
                    </p>

                    <section className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-anton uppercase tracking-tight text-brand mb-4">1. Kto administruje Twoimi danymi?</h2>
                        <p className="text-zinc-300">
                            Administratorem Twoich danych osobowych jest Trener Rzepa. Możesz się z nami skontaktować pisząc na adres e-mail: <span className="text-zinc-100 font-bold bg-zinc-800 px-2 py-1 rounded-md">rzepa.collab@gmail.com</span> lub przez moje media społecznościowe.
                        </p>
                    </section>

                    <section className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-anton uppercase tracking-tight text-brand mb-4">2. Po co nam Twoje dane?</h2>
                        <p className="mb-6 text-zinc-300">Zbieramy tylko to, co jest absolutnie niezbędne do dowiezienia Ci wyników:</p>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="flex gap-4">
                                <span className="text-brand font-bold shrink-0 mt-1">✓</span>
                                <span><strong className="text-zinc-100 font-bold">Adres e-mail:</strong> Używamy go, aby wysłać Ci potwierdzenie zamówienia, ankietę startową, rachunek oraz Twój gotowy plan treningowy.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-brand font-bold shrink-0 mt-1">✓</span>
                                <span><strong className="text-zinc-100 font-bold">Dane z ankiety:</strong> Informacje o Twojej sylwetce, zdrowiu i stażu treningowym służą wyłącznie do bezpiecznego i skutecznego ułożenia indywidualnego planu.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-anton uppercase tracking-tight text-brand mb-4">3. Kto jeszcze widzi Twoje dane?</h2>
                        <p className="mb-6 text-zinc-300">Nie sprzedajemy i nie udostępniamy Twoich danych żadnym agencjom marketingowym. Przekazujemy je tylko sprawdzonym partnerom technologicznym w celu realizacji zamówienia:</p>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="flex gap-4">
                                <span className="text-brand font-bold shrink-0 mt-1">✓</span>
                                <span><strong className="text-zinc-100 font-bold">Stripe:</strong> Nasz globalny operator płatności. Przetwarza Twoje dane w celu autoryzacji karty, BLIKa czy Apple Pay. My nie mamy dostępu do numeru Twojej karty kredytowej – jest to w 100% zaszyfrowane przez Stripe.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-anton uppercase tracking-tight text-brand mb-4">4. Twoje prawa</h2>
                        <p className="mb-6 text-zinc-300">W każdej chwili jesteś właścicielem swoich danych. Masz prawo do:</p>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand shrink-0"></span>
                                <span>Wglądu w to, jakie dane na Twój temat przechowujemy.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand shrink-0"></span>
                                <span>Żądania ich poprawienia.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-brand shrink-0"></span>
                                <span>Żądania całkowitego usunięcia Twoich danych i wyników ankiet z naszej bazy (prawo do bycia zapomnianym).</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-anton uppercase tracking-tight text-brand mb-4">5. Ciasteczka (Cookies)</h2>
                        <p className="text-zinc-300">
                            Używamy tylko niezbędnych plików cookies, które pozwalają naszej stronie działać poprawnie (np. utrzymanie wybranego pakietu do momentu opłacenia go w bramce Stripe). Nie śledzimy każdego Twojego ruchu w internecie.
                        </p>
                    </section>

                    <div className="pt-12 text-center">
                        <p className="inline-block bg-zinc-900 px-6 py-3 rounded-full text-zinc-500 border border-zinc-800/80 font-medium">
                            Ostatnia aktualizacja: <span className="text-zinc-400">Kwiecień 2026 r.</span>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}