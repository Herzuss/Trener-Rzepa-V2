import Nav from "./components/nav";
import Hero from "./components/hero";
import Cooferuje from "./components/cootrzymujesz";
import Omnie from "./components/omnie";
import Przemiany from "./components/przemiany";
import Opinie from "./components/opinie";

export default function Home() {
  return (
    <main>
      <Nav></Nav>
      <Hero></Hero>
      <Cooferuje></Cooferuje>
      <Przemiany></Przemiany>
      <Omnie></Omnie>
      <Opinie></Opinie>
    </main>
  );
}
