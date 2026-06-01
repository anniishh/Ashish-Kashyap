import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import politicalCaseImg from "@assets/pic_20260425233204_2_1780332381350.jpg";
import cmCaseImg1 from "@assets/pic_20260425233204_4_1780332432074.jpg";
import cmCaseImg2 from "@assets/pic_20260425233204_5_1780332482966.jpg";
import cmCaseImg3 from "@assets/pic_20260425233204_9_1780332644648.jpg";
import cmCaseImg4 from "@assets/pic_20260425233204_10_1780332692821.jpg";
import cwgCaseImg from "@assets/pic_20260425233204_3_1780332560604.jpg";

// Dynamically import all images
const caseImagesContext = import.meta.glob('../../assets/cases/*.jpg', { eager: true, query: '?url', import: 'default' });
const allCaseImages = Object.values(caseImagesContext) as string[];

// Sort images numerically based on the filename number to ensure correct page order
const sortedImages = allCaseImages.sort((a, b) => {
  // Extract the number after the last underscore in the filename
  const extractNum = (str: string) => {
    const match = str.match(/_(\d+)\.[a-zA-Z0-9]+(?:\?.*)?$/);
    return match ? parseInt(match[1], 10) : 0;
  };
  
  const numA = extractNum(a);
  const numB = extractNum(b);
  
  return numA - numB;
});

const categories = [
  { id: "nia", title: "NIA Cases" },
  { id: "political", title: "Political Cases" },
  { id: "cm", title: "Virbhadra Singh Case" },
  { id: "cwg", title: "Commonwealth Games" },
  { id: "cbi", title: "CBI Matters" },
  { id: "ed", title: "ED Cases" },
  { id: "sc", title: "Supreme Court" },
  { id: "hc", title: "High Court" }
];

// Map images to specific cases with content
const casesData = [
  {
    categoryId: "nia",
    title: "National Investigation Agency v. Accused",
    description: "Defense representation in a high-stakes UAPA matter involving complex procedural and constitutional questions. The case involved extensive cross-examination of digital evidence and testimonies.",
    images: (() => {
      const arr = [...sortedImages.slice(0, 4)];
      if (arr.length >= 2) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      }
      return arr;
    })()
  },
  {
    categoryId: "political",
    title: "Directorate of Enforcement v. Amarendra Dhari Singh (MP) & Ors.",
    description: "High-profile political case representing Member of Parliament Amarendra Dhari Singh in a complex matter involving the Directorate of Enforcement.",
    images: [politicalCaseImg, ...sortedImages.slice(4, 7)]
  },
  {
    categoryId: "cm",
    title: "ED Vs. Virbhadra Singh and Ors.",
    description: "Legal strategy and representation in a politically sensitive matter involving a Chief Minister. The case required navigating complex media scrutiny and intricate legal frameworks across multiple jurisdictions.",
    images: [cmCaseImg1, cmCaseImg2, cmCaseImg3, cmCaseImg4, ...sortedImages.slice(10, 12)]
  },
  {
    categoryId: "cwg",
    title: "DoE v. A.K. Reddy & Anr. (Commonwealth Games)",
    description: "Defense representation in the high-profile Commonwealth Games matter in Delhi, navigating complex proceedings initiated by the Directorate of Enforcement.",
    images: [cwgCaseImg]
  },
  {
    categoryId: "cbi",
    title: "Central Bureau of Investigation - Bank Fraud",
    description: "Successfully defended the accused in a multi-crore financial matter investigated by the CBI. The defense focused on the lack of mens rea and procedural lapses in the forensic audit.",
    images: sortedImages.slice(8, 12)
  },
  {
    categoryId: "ed",
    title: "Enforcement Directorate - PMLA Proceedings",
    description: "Represented the client in money laundering proceedings initiated by the ED. Challenged the provisional attachment orders and argued for the protection of legitimate business assets.",
    images: sortedImages.slice(12, 15)
  },
  {
    categoryId: "sc",
    title: "Special Leave Petition - Supreme Court",
    description: "A landmark Special Leave Petition challenging the interpretation of statutory provisions by the High Court. The Supreme Court granted relief based on constitutional arguments.",
    images: sortedImages.slice(15, 19)
  },
  {
    categoryId: "hc",
    title: "Writ Petition - State High Court",
    description: "Quashing of illegal administrative orders through a Writ of Certiorari in the High Court, protecting the fundamental rights of the petitioner against arbitrary state action.",
    images: sortedImages.slice(19, 22)
  }
];

export function CasesDealsIn() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeCases = casesData.filter(c => c.categoryId === activeCategory);

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
            Notable Case <span className="italic text-accent">Files</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A curated selection of significant legal matters, orders, and representations 
            across various courts and tribunals.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Case Listings for Active Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            {activeCases.map((caseItem, caseIdx) => (
              <div key={caseIdx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {caseItem.images.map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
                      onClick={() => setSelectedImage(src)}
                    >
                      <img
                        src={src}
                        alt={`${caseItem.title} - Page ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                        Page {index + 1}
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <span className="text-white font-medium tracking-wider uppercase text-sm">
                          View
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
            
            {activeCases.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No cases currently available for this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-5xl bg-transparent border-none shadow-none p-0 flex justify-center items-center h-[90vh] [&>button]:hidden outline-none cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <div className="relative max-w-full max-h-full flex flex-col items-center w-full h-full justify-center">
              {/* Mobile cross button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="md:hidden absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-md transition-colors z-50"
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedImage} 
                alt="Case detail view" 
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                // No stopPropagation here so clicking the image also closes the modal
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
