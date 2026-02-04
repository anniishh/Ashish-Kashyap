import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About as AboutSection } from "@/components/sections/About";
import { motion } from "framer-motion";
import scImage from "@assets/image_3_1770220553484.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-20 md:pt-16">
        <div className="container mx-auto px-4 pt-6 pb-2">
          {/* Supreme Court Header Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden mb-4 shadow-2xl group"
          >
            <img 
              src={scImage} 
              alt="Supreme Court of India" 
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
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                  Upholding <span className="italic text-white/90">Justice</span> at the Highest Level
                </h1>
                <p className="text-white/80 text-lg md:text-2xl font-light tracking-wide max-w-2xl leading-relaxed">
                  Dedicated representation at the Supreme Court of India and High Courts across the nation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
