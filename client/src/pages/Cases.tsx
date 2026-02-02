import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsHighlights } from "@/components/sections/NewsHighlights";

export default function Cases() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-16 md:pt-24">
        <NewsHighlights fullPage={true} />
      </main>
      <Footer />
    </div>
  );
}
