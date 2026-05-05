import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle2, GraduationCap, Briefcase, Scale } from "lucide-react";
import rahulImg from "@assets/image_1778000204738.png";
import logo from "@assets/Gemini_Generated_Image_tob7rbtob7rbtob7-removebg-preview_1778000095802.png";

export default function AdvocateRahul() {
  const expertise = [
    "Civil Litigation & Disputes",
    "Corporate & Commercial Law",
    "Family Law & Matrimonial Disputes",
    "Property & Real Estate Law",
    "Consumer Protection",
    "Alternative Dispute Resolution"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="pt-20 md:pt-24 pb-20">
        {/* Hero Profile Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/3 max-w-sm"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={rahulImg} 
                    alt="Adv. Rahul Kumar" 
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h1 className="text-2xl font-bold font-serif">Adv. Rahul Kumar</h1>
                    <p className="text-white/80 font-medium">Partner, A.R. & Associates</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-2/3 space-y-6"
              >
                <div className="inline-block bg-white p-3 rounded-xl shadow-sm border border-black/5 mb-2">
                  <img src={logo} alt="A.R. & Associates" className="h-10 object-contain" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
                  Dedicated Legal <span className="text-accent">Counsel</span>
                </h2>
                
                <div className="w-20 h-1 bg-accent"></div>
                
                <p className="text-lg text-black/70 leading-relaxed max-w-2xl">
                  Advocate Rahul Kumar is a distinguished founding partner at A.R. & Associates, bringing extensive experience in civil, corporate, and constitutional litigation. Known for his meticulous approach to complex legal disputes, he represents clients across District Courts, High Courts, and specialized tribunals.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="tel:+919716324341" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-colors font-medium">
                    <Phone className="h-4 w-4" /> +91 9716324341
                  </a>
                  <a href="mailto:info@arassociates.com" className="flex items-center gap-2 bg-white text-black border border-black/20 px-6 py-3 rounded-full hover:border-black transition-colors font-medium shadow-sm">
                    <Mail className="h-4 w-4" /> Contact via Email
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Areas of Expertise */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-black mb-6 flex items-center gap-3">
                    <Scale className="text-accent h-8 w-8" /> 
                    Areas of Expertise
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {expertise.map((area, idx) => (
                      <div key={idx} className="flex items-start bg-gray-50 p-4 rounded-xl border border-black/5">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-black/80 font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-serif font-bold text-black mb-6 flex items-center gap-3">
                    <Briefcase className="text-accent h-8 w-8" /> 
                    Professional Journey
                  </h3>
                  <p className="text-black/70 leading-relaxed mb-4">
                    As a pivotal figure at A.R. & Associates, Adv. Rahul Kumar has successfully handled numerous high-stakes cases before various judicial and quasi-judicial forums. His practice spans across the National Capital Region and specialized tribunals including NCLT, CAT, and Consumer Courts.
                  </p>
                  <p className="text-black/70 leading-relaxed">
                    His client-centric approach and profound understanding of procedural laws make him a sought-after legal counsel for both corporate entities and individual clients seeking reliable and strategic legal representation.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact & Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 border border-black/10 shadow-lg sticky top-24">
                  <h3 className="text-xl font-bold text-black mb-6 border-b border-black/10 pb-4">Practice Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-accent mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Primary Office</h4>
                        <p className="text-black/70 text-sm mt-1">
                          Lawyer's Chamber's Block,<br />
                          Delhi High Court,<br />
                          New Delhi
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-accent mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Admissions</h4>
                        <p className="text-black/70 text-sm mt-1">
                          Bar Council of Delhi<br />
                          Supreme Court Bar Association
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Scale className="h-5 w-5 text-accent mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Firm Affiliation</h4>
                        <p className="text-black/70 text-sm mt-1">
                          Founding Partner at<br />
                          A.R. & Associates
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-black/10">
                    <a href="tel:+919716324341" className="block w-full text-center bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors shadow-md">
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
