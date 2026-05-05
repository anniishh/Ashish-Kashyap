import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_legal_background_texture.png";
import portrait from "@assets/image_1769096431460.png";
import arLogo from "@assets/Gemini_Generated_Image_tob7rbtob7rbtob7-removebg-preview_1778000095802.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 md:pt-36 lg:pt-24 md:mt-[1px] overflow-hidden bg-white">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--color-muted),_transparent_50%)]"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col w-fit gap-3 mb-6">
            <div className="px-3 py-1 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-sm text-center">
              <span className="text-accent text-[11px] sm:text-sm font-semibold tracking-wider uppercase">
                Supreme Court & High Court Advocate
              </span>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-black/5 flex justify-center items-center w-full h-16 sm:h-20">
              <img src={arLogo} alt="A.R. & Associates Law Firm" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
            Advocate <br className="hidden sm:block" />
            <span className="red-dot-accent">Ashish Kashyap</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Deals in Criminal Cases | CBI | ED | NIA. Providing strategic legal counsel with unwavering integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact#schedule-consultation">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-6 transition-colors font-bold">
                Book Appointment
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-foreground border-border hover:bg-muted text-lg px-8 py-6 transition-colors">
                Expertise <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div>
              <p className="text-3xl font-bold text-foreground italic">24/7</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Legal Support</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <p className="text-3xl font-bold text-foreground">300+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Cases Won</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/5 aspect-[3/4] max-w-md mx-auto">
            <img 
              src={portrait} 
              alt="Advocate Ashish Kashyap" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative elements behind the image */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl hidden md:block"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
}
