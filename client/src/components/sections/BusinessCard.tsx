import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Share2, QrCode } from "lucide-react";

export function BusinessCard() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Digital Business Card</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scan or tap to save my contact details instantly.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            className="w-full max-w-xl bg-card border border-white/5 rounded-xl overflow-hidden shadow-2xl relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Card Header Design */}
            <div className="h-2 bg-gradient-to-r from-primary via-[#F2D06B] to-primary"></div>
            
            <div className="p-8 md:p-12 relative">
              {/* Decorative Watermark */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">Adv. Ashish Kashyap</h3>
                  <p className="text-primary font-medium tracking-wide">Supreme Court & High Court Advocate</p>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <QrCode className="w-16 h-16 text-black" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground group hover:text-white transition-colors cursor-pointer">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 98765 43210</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-muted-foreground group hover:text-white transition-colors cursor-pointer">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>contact@advashishkashyap.com</span>
                  </div>

                  <div className="flex items-center space-x-3 text-muted-foreground group hover:text-white transition-colors cursor-pointer">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span>www.advashishkashyap.com</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-muted-foreground group hover:text-white transition-colors cursor-pointer">
                    <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">
                      Chamber No. 101, Supreme Court Lawyers Chambers, New Delhi - 110001
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                <div className="text-xs text-muted-foreground">
                  TIMINGS: MON-SAT | 10:00 AM - 07:00 PM
                </div>
                <button className="flex items-center text-primary text-sm font-semibold hover:text-white transition-colors">
                  <Share2 className="w-4 h-4 mr-2" /> Share Card
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
