import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Story from "@/components/Story";
import WhatsInside from "@/components/WhatsInside";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 relative z-10">
        <Hero />
        <LogoStrip />
        <Story />
        <WhatsInside />
        <Results />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
