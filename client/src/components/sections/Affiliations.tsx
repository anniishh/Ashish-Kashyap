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
                    <div className="w-full h-full border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-orange-50">
                      {/* Background decorations */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 p-4 border-b-4 border-orange-400">
                          <div className="flex items-center gap-4">
                            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-1 border-2 border-white flex-shrink-0">
                              <img src={logo} alt="IHRCCC Logo" className="h-full w-full object-contain" />
                            </div>
                            <div className="text-white">
                              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide drop-shadow-md">
                                <span className="md:hidden">IHRCCC</span>
                                <span className="hidden md:inline">International Human Rights & Crime Control Council (IHRCCC)</span>
                              </h3>
                              <p className="text-teal-100 font-semibold text-sm">Official Identity Credential</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-grow bg-white/40 backdrop-blur-sm">
                          <div className="bg-white/60 p-3 rounded-lg border border-blue-100">
                            <p className="text-xs text-blue-600 uppercase font-bold mb-1 tracking-wider">ID Number</p>
                            <p className="text-slate-800 font-mono font-bold">JKQT/IH24/73380</p>
                          </div>
                          <div className="bg-white/60 p-3 rounded-lg border border-teal-100">
                            <p className="text-xs text-teal-600 uppercase font-bold mb-1 tracking-wider">UID Number</p>
                            <p className="text-slate-800 font-mono font-bold">17KTQSZIH1897</p>
                          </div>
                          <div className="bg-white/60 p-3 rounded-lg border border-orange-100">
                            <p className="text-xs text-orange-600 uppercase font-bold mb-1 tracking-wider">Jurisdiction / Location</p>
                            <p className="text-slate-800 font-bold">Haryana (All India)</p>
                          </div>
                          <div className="bg-white/60 p-3 rounded-lg border border-emerald-100 flex flex-col justify-center items-start">
                            <p className="text-xs text-emerald-600 uppercase font-bold mb-1 tracking-wider">Validity Status</p>
                            <div className="flex items-center gap-2">
                              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm text-xs px-2.5 py-1 rounded font-bold uppercase">Lifetime</span>
                              <span className="text-[10px] font-bold text-slate-500">(Issued Feb 2025)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-50 border-t border-slate-200">
                          <p className="text-[11px] text-slate-500 font-medium italic text-center">
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
                    <div className="w-full h-full border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
                      <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 text-white py-3 px-6 text-center shadow-md">
                        <h4 className="font-bold text-sm md:text-base uppercase tracking-wider drop-shadow-md">Terms & Conditions</h4>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col justify-between overflow-y-auto bg-white/60 backdrop-blur-sm">
                        <ul className="text-xs md:text-[13px] text-slate-700 space-y-2.5 list-decimal list-inside pl-1 marker:text-blue-500 marker:font-bold font-medium">
                          <li>This Card is property of IHRCCC & must be returned upon request to IHRCCC.</li>
                          <li>This card can withdrawn any time without notice.</li>
                          <li>Use of this I card as per the terms & conditions of the card holder agreement.</li>
                          <li>Duplicate I Card will be issued only after paying Rs. 500/- with the copy of FIR and Id Proof.</li>
                          <li>If Found please return this card to nearest police station of IHRCCC office.</li>
                          <li>Id Card Renewal every year is compulsory. Otherwise the card will be suspended.</li>
                          <li>Holder of this card is not an employee of IHRCCC and does not confer any executive/law enforcement power to him/her. Misuse of this card is strictly prohibited and liable to confiscation.</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 md:p-5 text-center mt-auto border-t-4 border-orange-500">
                        <h5 className="font-bold text-sm mb-2 text-orange-400 uppercase tracking-widest">Office Address</h5>
                        <p className="text-xs text-white/90 leading-relaxed font-medium">
                          B-14, 2nd Floor, Neelkanth Bhawan 1st,<br />
                          (Above Yamaha Showroom), Kh No. 869<br />
                          Main Road, Sant Nagar, Burari, Delhi - 110084<br />
                          <span className="text-teal-400 mt-1 inline-block">www.ihrccc.com | info@ihrccc.com</span><br />
                          <span className="text-blue-300">Ph.: 9333333121, 8388888851</span>
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
