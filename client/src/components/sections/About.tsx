import { motion, AnimatePresence } from "framer-motion";
import { Scale, Gavel, BookOpen, Users, Clock, Award, ChevronRight, ChevronDown } from "lucide-react";
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

export function About() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const visibleImages = showAllImages ? galleryImages : galleryImages.slice(0, 2);

  return (
    <section id="about" className="py-5 bg-muted/30 overflow-hidden">
      <div className="container">
        {/* Gallery Section */}
        <div className="mb-5 pb-5">
          <div className="text-center mb-5">
            <h2 className="display-5 font-serif fw-bold text-foreground mb-3">Professional Gallery</h2>
            <div className="w-25 h-1 bg-accent mx-auto" style={{ height: '4px', maxWidth: '100px' }}></div>
          </div>
          
          <div className="row g-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`col-6 col-md-3 ${!showAllImages && i >= 2 ? 'd-none d-md-block' : 'd-block'}`}
              >
                <div className="position-relative ratio ratio-3x4 rounded-4 overflow-hidden shadow-sm border group">
                  <img src={img} alt={`Gallery ${i+1}`} className="w-100 h-100 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 d-flex justify-center d-md-none">
            <button
              onClick={() => setShowAllImages(!showAllImages)}
              className="btn btn-light border border-border rounded-pill px-4 py-2 fw-medium shadow-sm active:scale-95 transition-all d-flex align-items-center gap-2"
            >
              {showAllImages ? (
                <>Show Less <ChevronDown className="h-4 w-4 rotate-180" /></>
              ) : (
                <>Show More <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          </div>
        </div>

        <div className="row align-items-center mb-5 pb-5 gy-5">
          <div className="col-12 col-lg-6">
            <h2 className="display-6 font-serif fw-bold text-foreground mb-4">
              A Legacy of <span className="text-accent">Legal Excellence</span>
            </h2>
            <p className="lead text-muted-foreground mb-4">
              Advocate Ashish Kashyap is a distinguished legal practitioner specializing in high-stakes Criminal Cases, CBI, ED, and NIA matters. Practicing at the Supreme Court of India and Delhi High Court, he has built a reputation for meticulous preparation and aggressive advocacy.
            </p>
            <p className="text-muted-foreground mb-4">
              His approach combines deep legal knowledge with strategic thinking to deliver favorable outcomes for his clients. He brings the same level of dedication and integrity to every case, whether it's a complex corporate investigation or a sensitive criminal defense.
            </p>
            
            <div className="row g-4 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <Clock className="text-accent h-6 w-6 shrink-0" />
                  <div>
                    <h4 className="fw-bold text-foreground mb-0">Expert Consultation</h4>
                    <p className="text-xs text-muted-foreground mb-0">Available Mon-Sat</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-3">
                  <Award className="text-accent h-6 w-6 shrink-0" />
                  <div>
                    <h4 className="fw-bold text-foreground mb-0">Top Rated</h4>
                    <p className="text-xs text-muted-foreground mb-0">Legal Representation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-lg-6">
            <div className="row g-3">
               <div className="col-6 pt-5">
                  <div className="bg-white p-4 rounded-4 border border-border shadow-sm mb-3">
                     <h3 className="h1 fw-bold text-accent mb-1">98%</h3>
                     <p className="text-sm text-muted-foreground mb-0">Success Rate</p>
                  </div>
                  <div className="bg-white p-4 rounded-4 border border-border shadow-sm">
                     <h3 className="h1 fw-bold text-accent mb-1">120+</h3>
                     <p className="text-sm text-muted-foreground mb-0">Corporate Clients</p>
                  </div>
               </div>
               <div className="col-6">
                  <div className="bg-white p-4 rounded-4 border border-border shadow-sm mb-3">
                     <h3 className="h1 fw-bold text-accent mb-1">300+</h3>
                     <p className="text-sm text-muted-foreground mb-0">Cases Resolved</p>
                  </div>
                  <div className="bg-white p-4 rounded-4 border border-border shadow-sm">
                     <h3 className="h1 fw-bold text-accent mb-1">24/7</h3>
                     <p className="text-sm text-muted-foreground mb-0">Legal Support</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className="bg-white p-4 p-md-5 rounded-4 border border-border shadow-sm">
            <h4 className="h3 font-serif fw-bold text-foreground mb-4 d-flex align-items-center">
              <Scale className="text-accent me-3 h-8 w-8" /> Cases deals in
            </h4>
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {caseCategories.map((category, i) => (
                <div key={i} className="col">
                  <button
                    onClick={() => toggleCategory(i)}
                    className={`btn w-100 text-start text-lg fw-medium p-3 rounded-3 border transition-all d-flex align-items-center justify-content-between ${
                      expandedCategory === i 
                        ? "btn-danger bg-danger border-danger shadow-sm text-white" 
                        : "btn-light bg-light text-muted-foreground border-transparent"
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <div className={`rounded-circle me-3 transition-colors ${
                        expandedCategory === i ? "bg-white" : "bg-accent"
                      }`} style={{ width: '8px', height: '8px' }}></div>
                      {category.title}
                    </div>
                    {expandedCategory === i ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <AnimatePresence>
                    {expandedCategory === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="list-unstyled py-3 px-4 mb-0 space-y-2">
                          {category.subcategories.map((sub, j) => (
                            <motion.li 
                              key={j}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: j * 0.05 }}
                              className="text-sm text-muted-foreground d-flex align-items-center mb-2"
                            >
                              <div className="rounded-circle bg-accent bg-opacity-25 me-2" style={{ width: '4px', height: '4px' }}></div>
                              <span>{sub}</span>
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

        <div id="practice" className="pt-5">
          <div className="text-center mb-5">
            <h2 className="display-5 font-serif fw-bold text-foreground mb-3">Core Areas of Practice</h2>
            <div className="w-25 h-1 bg-accent mx-auto" style={{ height: '4px', maxWidth: '100px' }}></div>
          </div>
          
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="col"
              >
                <div className="card h-100 bg-white border-border hover-border-accent transition-colors group shadow-sm">
                  <div className="card-body p-4 text-center">
                    <div className="rounded-circle mx-auto bg-accent bg-opacity-10 d-flex align-items-center justify-content-center mb-4 group-hover-bg-accent transition-colors" style={{ width: '56px', height: '56px' }}>
                      <area.icon className="h-6 w-6 text-accent group-hover-text-white transition-colors" />
                    </div>
                    <h3 className="h4 font-serif fw-bold text-foreground mb-3">{area.title}</h3>
                    <p className="card-text text-muted-foreground text-sm leading-relaxed mb-0">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
