import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CasesDealsIn } from "@/components/sections/CasesDealsIn";
import EDCasesTable from "@/components/sections/EDCasesTable";

export default function CaseGallery() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-20 md:pt-24 pb-10">
        <CasesDealsIn />
        <EDCasesTable />
      </main>
      <Footer />
    </div>
  );
}
