import Nav from "./components/nav";
import Hero from "./components/hero";
import Cooferuje from "./components/cootrzymujesz";
import Omnie from "./components/omnie";
import Przemiany from "./components/przemiany";
import Opinie from "./components/opinie";
import Oferta from "./components/oferta";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AnimatedSections from "./components/AnimatedSections";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AnimatedSections>
        <Cooferuje />
        <Przemiany />
        <Omnie />
        <Opinie />
        <Oferta />
        <FAQ />
        <Footer />
      </AnimatedSections>
    </main>
  );
}
