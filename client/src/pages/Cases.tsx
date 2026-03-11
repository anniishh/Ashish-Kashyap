import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsHighlights } from "@/components/sections/NewsHighlights";
import { motion } from "framer-motion";
import heroCases from "@/assets/hero_cases.png";

export default function Cases() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-20 md:pt-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-6 pb-2">
          {/* Hero Section for Cases */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden mb-8 shadow-2xl group"
          >
            <img 
              src={heroCases} 
              alt="Cases Hero" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="w-20 h-1 bg-accent mb-6"></div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                  Legal <span className="italic text-white/90">Matters</span> & Cases
                </h1>
                <p className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl leading-relaxed">
                  Track record of successful representations across prominent legal battles and key judgements.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <NewsHighlights fullPage={true} />
      </main>
      <Footer />
    </div>
  );
}
