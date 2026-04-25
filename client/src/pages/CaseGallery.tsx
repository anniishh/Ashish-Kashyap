import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Dynamically import all images from the cases directory
const caseImagesContext = import.meta.glob('../assets/cases/*.jpg', { eager: true, query: '?url', import: 'default' });
const caseImages = Object.values(caseImagesContext) as string[];

export default function CaseGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16"
          >
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Case <span className="italic text-accent">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Glimpses from various proceedings, appearances, and legal representations across courts and tribunals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {caseImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Case appearance ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wider uppercase text-sm transition-opacity duration-300">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0 flex justify-center items-center h-[90vh]">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Case detail" 
              className="max-w-full max-h-full object-contain rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
