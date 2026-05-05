import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NewsHighlights } from "@/components/sections/NewsHighlights";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { CasesDealsIn } from "@/components/sections/CasesDealsIn";
import EDCasesTable from "@/components/sections/EDCasesTable";
import { Affiliations } from "@/components/sections/Affiliations";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Affiliations />
        <About />
        <EDCasesTable />
        <CasesDealsIn />
        <NewsHighlights />
        <div className="bg-muted/30">
          <Locations limit={2} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
