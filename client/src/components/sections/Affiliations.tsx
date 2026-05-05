import { Globe, Award, ChevronRight, ChevronLeft } from "lucide-react";
import logo from "@assets/image_1777998797622.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Affiliations() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
              Global Affiliations & <span className="text-accent">Memberships</span>
            </h2>
            <p className="text-black/70 text-lg leading-relaxed">
              Advocate Ashish Kashyap is formally recognized and holds prestigious memberships in international organizations dedicated to human rights and crime control, demonstrating a commitment to justice beyond the courtroom.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start">
                <div className="mt-1 bg-accent/10 p-2 rounded-full mr-4">
                  <img src={logo} alt="IHRCCC Logo" className="h-5 w-5 object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Executive Member</h4>
                  <p className="text-black/70">International Human Rights & Crime Control Council (IHRCCC)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-accent/10 p-2 rounded-full mr-4">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Global Recognition</h4>
                  <p className="text-black/70">Operating under the High Commission of Human Rights Switzerland</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-accent/10 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Statutory Compliance</h4>
                  <p className="text-black/70">Registered under Govt. of India Trust Registration Act 1882</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full [perspective:1000px]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-black/50">IHRCCC Identity Card</span>
              <button 
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                {isFlipped ? (
                  <><ChevronLeft className="h-4 w-4" /> View Front</>
                ) : (
                  <>View Back <ChevronRight className="h-4 w-4" /></>
                )}
              </button>
            </div>
            
            <div className="relative w-full h-[400px] sm:h-[350px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
              <AnimatePresence initial={false} mode="wait">
                {!isFlipped ? (
                  <motion.div
                    key="front"
                    initial={{ rotateY: -180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 180, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
                  >
                    <div className="w-full h-full bg-gray-50 border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full rounded-tr-2xl -z-0"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6 border-b border-black/10 pb-6">
                          <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden p-1 border border-accent/20 flex-shrink-0">
                            <img src={logo} alt="IHRCCC Logo" className="h-full w-full object-contain" />
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-black uppercase tracking-wide">IHRCCC</h3>
                            <p className="text-accent font-medium text-sm">Official Identity Credential</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-grow">
                          <div>
                            <p className="text-xs text-black/50 uppercase font-semibold mb-1">ID Number</p>
                            <p className="text-black font-mono font-medium">JKQT/IH24/73380</p>
                          </div>
                          <div>
                            <p className="text-xs text-black/50 uppercase font-semibold mb-1">UID Number</p>
                            <p className="text-black font-mono font-medium">17KTQSZIH1897</p>
                          </div>
                          <div>
                            <p className="text-xs text-black/50 uppercase font-semibold mb-1">Jurisdiction / Location</p>
                            <p className="text-black font-medium">Haryana (All India)</p>
                          </div>
                          <div>
                            <p className="text-xs text-black/50 uppercase font-semibold mb-1">Validity Status</p>
                            <p className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold uppercase">Lifetime</p>
                            <span className="text-xs text-black/50 ml-2">(Issued Feb 2025)</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-black/10">
                          <p className="text-xs text-black/40 italic text-center">
                            Authorized Non-Governmental Organization working for the protection of human rights and crime control globally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -180, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
                  >
                    <div className="w-full h-full bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col">
                      <div className="bg-[#4a3b8c] text-white py-3 px-6 text-center">
                        <h4 className="font-bold text-sm md:text-base">TERMS & CONDITIONS</h4>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between overflow-y-auto">
                        <ul className="text-xs text-black/80 space-y-2 list-decimal list-inside pl-2">
                          <li>This Card is property of IHRCCC & must be returned upon request to IHRCCC.</li>
                          <li>This card can withdrawn any time without notice.</li>
                          <li>Use of this I card as per the terms & conditions of the card holder agreement.</li>
                          <li>Duplicate I Card will be issued only after paying Rs. 500/- with the copy of FIR and Id Proof.</li>
                          <li>If Found please return this card to nearest police station of IHRCCC office.</li>
                          <li>Id Card Renewal every year is compulsory. Otherwise the card will be suspended.</li>
                          <li>Holder of this card is not an employee of IHRCCC and does not confer any executive/law enforcement power to him/her. Misuse of this card is strictly prohibited and liable to confiscation.</li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#4a3b8c] text-white p-4 text-center mt-auto">
                        <h5 className="font-bold text-sm mb-1">Office Address</h5>
                        <p className="text-xs text-white/80 leading-tight">
                          B-14, 2nd Floor, Neelkanth Bhawan 1st,<br />
                          (Above Yamaha Showroom), Kh No. 869<br />
                          Main Road, Sant Nagar, Burari, Delhi - 110084<br />
                          Website: www.ihrccc.com Email: info@ihrccc.com<br />
                          Ph.: 9333333121, 8388888851
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
