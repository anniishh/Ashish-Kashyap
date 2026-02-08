import { motion, AnimatePresence } from "framer-motion";
import { Scale, Gavel, BookOpen, Users, Clock, Award, ChevronRight, ChevronDown, Camera, Sparkles, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  { icon: Scale, title: "Civil Litigation", desc: "Property disputes, family law, and contract breaches." },
  { icon: Gavel, title: "Criminal Defense", desc: "Strong representation in all criminal proceedings." },
  { icon: BookOpen, title: "Corporate Law", desc: "Legal advisory for businesses, startups, and compliance." },
  { icon: Users, title: "Family Disputes", desc: "Divorce, custody, and inheritance matters." },
];

const caseCategories = [
  {
    title: "Criminal Cases",
    subcategories: ["Homicide & Murder Trials", "Sexual Offenses (POCSO & IPC)", "Drug & Psychotropic Substances (NDPS)", "Cyber Crimes & Digital Fraud"]
  },
  {
    title: "CBI Cases",
    subcategories: ["Corruption & Bribery Investigations", "Banking Fraud & Embezzlement", "High-profile Institutional Crimes", "Central Government Employee Misconduct"]
  },
  {
    title: "ED Matters",
    subcategories: ["Money Laundering (PMLA)", "Foreign Exchange Violations (FEMA)", "Asset Attachment & Seizure", "Corporate Financial Investigations"]
  },
  {
    title: "NIA Matters",
    subcategories: ["Terror Funding Investigations", "National Security Cases", "Unlawful Activities (UAPA)", "Transnational Organized Crime"]
  },
  {
    title: "Special Acts Litigation",
    subcategories: ["Arms Act", "Information Technology Act", "Narcotics Control", "Prevention of Corruption Act"]
  },
  {
    title: "Bail Matters",
    subcategories: ["Anticipatory Bail Applications", "Regular Bail Petitions", "Default Bail", "Bail in Special Court Matters"]
  },
  {
    title: "Economic Offenses",
    subcategories: ["White Collar Crimes", "Tax Evasion & GST Fraud", "Stock Market Malpractices", "Insolvency & Bankruptcy Crimes"]
  },
  {
    title: "Corporate Criminal Liability",
    subcategories: ["Director's Liability", "Vicarious Liability of Companies", "Regulatory Non-compliance", "Environmental Legal Violations"]
  }
];

import justiceStatue from "@assets/image_1769099455444.png";

import img1 from "@assets/image_1_1770220553485.jpeg";
import img2 from "@assets/image_2_1770220553485.jpeg";
import img3 from "@assets/image_3_1770220553484.jpeg";
import img4 from "@assets/image_4_1770220553484.jpeg";
import img5 from "@assets/image_5_1770220553483.jpeg";
import img6 from "@assets/image_6_1770571634508.jpeg";
import img7 from "@assets/image_7_1770571634508.jpeg";
import img8 from "@assets/image_8_1770571634508.jpeg";

const galleryImages = [
  { src: img5, title: "Advocacy", size: "large" },
  { src: img1, title: "Consultation", size: "small" },
  { src: img6, title: "Preparation", size: "medium" },
  { src: img2, title: "Dedication", size: "small" },
  { src: img7, title: "Justice", size: "medium" },
  { src: img3, title: "Strategy", size: "small" },
  { src: img8, title: "Professionalism", size: "large" },
  { src: img4, title: "Integrity", size: "medium" }
];

export function About() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cinematic Bento-style Gallery */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-accent mb-4">
                <LayoutGrid className="h-6 w-6" />
                <span className="uppercase tracking-[0.5em] text-xs font-bold">Visual Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                Professional <span className="text-accent italic">Perspective</span>
              </h2>
            </div>
            <div className="hidden md:block w-48 h-px bg-accent/20 mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group rounded-[2rem] overflow-hidden shadow-xl cursor-pointer ${
                  img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  img.size === 'medium' ? 'md:row-span-2' : ''
                }`}
              >
                <motion.img 
                  src={img.src} 
                  alt={img.title}
                  animate={{ 
                    scale: hoveredIndex === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2 block">
                      {img.title}
                    </span>
                    <h3 className="text-white font-serif text-2xl">
                      Adv. Ashish Kashyap
                    </h3>
                  </motion.div>
                </div>
                {/* Decorative overlay border */}
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none group-hover:border-accent/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              A Legacy of <span className="text-accent">Legal Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Advocate Ashish Kashyap is a distinguished legal practitioner specializing in high-stakes Criminal Cases, CBI, ED, and NIA matters. Practicing at the Supreme Court of India and Delhi High Court, he has built a reputation for meticulous preparation and aggressive advocacy.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              His approach combines deep legal knowledge with strategic thinking to deliver favorable outcomes for his clients. He brings the same level of dedication and integrity to every case, whether it's a complex corporate investigation or a sensitive criminal defense.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center space-x-3">
                <Clock className="text-accent h-6 w-6" />
                <div>
                  <h4 className="font-bold text-foreground">Expert Consultation</h4>
                  <p className="text-xs text-muted-foreground">Available Mon-Sat</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-accent h-6 w-6" />
                <div>
                  <h4 className="font-bold text-foreground">Top Rated</h4>
                  <p className="text-xs text-muted-foreground">Legal Representation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                     <h3 className="text-4xl font-bold text-accent mb-1">98%</h3>
                     <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                     <h3 className="text-4xl font-bold text-accent mb-1">120+</h3>
                     <p className="text-sm text-muted-foreground">Corporate Clients</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                     <h3 className="text-4xl font-bold text-accent mb-1">300+</h3>
                     <p className="text-sm text-muted-foreground">Cases Resolved</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                     <h3 className="text-4xl font-bold text-accent mb-1">24/7</h3>
                     <p className="text-sm text-muted-foreground">Legal Support</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-border shadow-sm">
            <h4 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 flex items-center">
              <Scale className="text-accent mr-3 h-8 w-8" /> Cases deals in
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseCategories.map((category, i) => (
                <div key={i} className="flex flex-col">
                  <button
                    onClick={() => toggleCategory(i)}
                    className={`flex items-center justify-between text-left text-lg font-medium p-4 rounded-xl border transition-all group ${
                      expandedCategory === i 
                        ? "bg-accent text-white border-accent shadow-md" 
                        : "bg-muted/30 text-muted-foreground border-transparent hover:border-accent/20 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 transition-colors ${
                        expandedCategory === i ? "bg-white" : "bg-accent group-hover:scale-125"
                      }`}></div>
                      {category.title}
                    </div>
                    {expandedCategory === i ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </button>
                  <AnimatePresence>
                    {expandedCategory === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="py-3 px-6 space-y-2">
                          {category.subcategories.map((sub, j) => (
                            <motion.li 
                              key={j}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: j * 0.05 }}
                              className="text-sm md:text-base text-muted-foreground flex items-center"
                            >
                              <div className="w-1 h-1 bg-accent/40 rounded-full mr-2"></div>
                              {sub}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="practice">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Core Areas of Practice</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-border h-full hover:border-accent/50 transition-colors group shadow-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 mx-auto bg-accent/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                      <area.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
