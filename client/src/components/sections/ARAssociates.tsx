import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@assets/Gemini_Generated_Image_tob7rbtob7rbtob7-removebg-preview_1778000095802.png";
import rahulImg from "@assets/image_1778000204738.png";
import ashishImg from "@assets/akadv_1777142128223.jpg";
import { Link } from "wouter";

export function ARAssociates() {
  const practiceAreas = [
    "District Courts",
    "High Courts",
    "Supreme Courts",
    "NIA Cases",
    "Recovery Tribunal",
    "NCLT",
    "CAT",
    "Consumer Courts"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-black/5 inline-block">
              <img src={logo} alt="A.R. & Associates Logo" className="h-16 md:h-20 lg:h-24 object-contain" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
            A.R. & ASSOCIATES
          </h2>
          <p className="text-xl text-accent font-medium uppercase tracking-widest mb-6">
            Legal Advisor & Solicitor
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col text-center sm:text-left">
              <h3 className="text-xl md:text-2xl lg:text-[24px] font-bold text-black mb-2 whitespace-nowrap">Adv. Ashish Kashyap & Adv. Rahul Kumar</h3>
              <p className="text-black/70 text-sm sm:text-base md:text-[16px] leading-relaxed max-w-3xl mt-2">
                A.R. & Associates is a premier law firm dedicated to providing exceptional legal representation across a broad spectrum of practice areas. Founded on the principles of integrity, aggressive advocacy, and strategic counsel, the firm operates at the highest levels of the Indian judicial system.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-black mb-4 border-b border-black/10 pb-2 inline-block">Areas of Practice</h4>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-black/90 mb-1">Adv. Ashish Kashyap</h5>
                  <p className="text-accent text-xs font-medium uppercase mb-3">Partner</p>
                  <div className="space-y-3">
                    {practiceAreas.slice(0, 4).map((area, index) => (
                      <div key={index} className="flex items-center text-black/80">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-black/90 mb-1">Adv. Rahul Kumar</h5>
                  <p className="text-accent text-xs font-medium uppercase mb-3">Partner</p>
                  <div className="space-y-3">
                    {practiceAreas.slice(4).map((area, index) => (
                      <div key={index} className="flex items-center text-black/80">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 w-full max-w-sm">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-accent/20 shadow-md">
                <img src={rahulImg} alt="Adv. Rahul Kumar" className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="text-xl font-bold text-black mb-1">Adv. Rahul Kumar</h4>
              <p className="text-accent font-medium mb-6 uppercase tracking-wider text-sm">Partner</p>
              
              <div className="w-full space-y-3 mt-auto">
                <a href="tel:+919716324341" className="block w-full px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-black/80 transition-colors shadow-sm">
                  +91 9716324341
                </a>
                <Link href="/advocate-rahul" className="flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors py-2 border border-accent/20 rounded-full hover:bg-accent/5">
                  View Full Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
