import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// We'll categorize the images based on the file names we have
const caseImagesContext = import.meta.glob('../../assets/cases/*.jpg', { eager: true, query: '?url', import: 'default' });
const allCaseImages = Object.values(caseImagesContext) as string[];

// Temporary categorization logic - we'll spread the images across categories
// In a real scenario, we'd map specific filenames to specific categories
const categories = [
  { id: "nia", title: "NIA Cases" },
  { id: "cbi", title: "CBI Matters" },
  { id: "ed", title: "ED Cases" },
  { id: "sc", title: "Supreme Court Cases" },
  { id: "hc", title: "High Court Cases" },
  { id: "cm", title: "High Profile / CM Cases" }
];

// Distribute images among categories roughly evenly for mockup purposes
const getImagesForCategory = (categoryId: string) => {
  const index = categories.findIndex(c => c.id === categoryId);
  const imagesPerCategory = Math.ceil(allCaseImages.length / categories.length);
  const start = index * imagesPerCategory;
  return allCaseImages.slice(start, start + imagesPerCategory);
};

export function CasesDealsIn() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeImages = getImagesForCategory(activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Cases We <span className="italic text-accent">Deal In</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Extensive experience representing clients across various high-stakes matters, 
            special tribunals, and constitutional courts.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {activeImages.map((src, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`${categories.find(c => c.id === activeCategory)?.title} case image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-white font-medium tracking-wider uppercase text-xs md:text-sm">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {activeImages.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No images currently available for this category.
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0 flex justify-center items-center h-[90vh]">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Case detail view" 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
