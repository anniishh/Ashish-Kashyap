import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsHighlights } from "@/components/sections/NewsHighlights";
import { motion } from "framer-motion";
import heroCases from "@/assets/hero_cases.png";

export default function Cases() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Section for Cases */}
        <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src={heroCases} 
            alt="Cases Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Legal Matters & Cases</h1>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </motion.div>
          </div>
        </section>
        
        <NewsHighlights fullPage={true} />
      </main>
      <Footer />
    </div>
  );
}
