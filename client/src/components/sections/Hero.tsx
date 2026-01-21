import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_legal_background_texture.png";
import portrait from "@assets/ak_1768985356593.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Legal Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Supreme Court & High Court Advocate
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Justice <br />
            <span className="text-gradient-gold">Defended.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Expert legal representation for complex litigation. Dedicated to protecting your rights with strategic counsel and unwavering advocacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white text-lg px-8 py-6">
              View Case History <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Cases Won</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 aspect-[3/4] max-w-md mx-auto">
            <img 
              src={portrait} 
              alt="Advocate Ashish Kashyap" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay gradient at the bottom of the image for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Decorative elements behind the image */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
