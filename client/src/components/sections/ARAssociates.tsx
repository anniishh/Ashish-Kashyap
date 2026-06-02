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
    <section className="py-[40px] md:py-[40px] bg-gradient-to-b from-white to-gray-50 overflow-hidden relative w-full">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
            A.R. & ASSOCIATES
          </h2>
          <p className="text-xl text-accent font-medium uppercase tracking-widest mb-6">
            Legal Advisor & Solicitor
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          <div className="lg:col-span-3 flex justify-center lg:justify-start pt-2 relative overflow-visible lg:-ml-8 xl:-ml-12 mb-8 lg:mb-0">
            <img src={logo} alt="A.R. & Associates Logo" className="w-full max-w-[280px] lg:max-w-[320px] object-contain object-center lg:object-left drop-shadow-sm scale-110 lg:scale-[1.4] lg:origin-left" />
          </div>
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Adv. Ashish Kashyap & Adv. Rahul Kumar</h3>
              <p className="text-black/70 text-lg leading-relaxed">
                A.R. & Associates is a premier law firm dedicated to providing exceptional legal representation across a broad spectrum of practice areas. Founded on the principles of integrity, aggressive advocacy, and strategic counsel, the firm operates at the highest levels of the Indian judicial system.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-8 border-t border-black/10 pt-8">
              <h4 className="text-xl font-bold text-black mb-2">Areas of Practice</h4>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                  <div className="md:w-1/3">
                    <h5 className="font-semibold text-black/90 text-lg">Adv. Ashish Kashyap</h5>
                    <p className="text-accent text-xs font-medium uppercase mt-1">Partner</p>
                  </div>
                  <div className="md:w-2/3 flex flex-wrap gap-x-6 gap-y-3">
                    {practiceAreas.slice(0, 4).map((area, index) => (
                      <div key={index} className="flex items-center text-black/80">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full h-px bg-black/5"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
                  <div className="md:w-1/3">
                    <h5 className="font-semibold text-black/90 text-lg">Adv. Rahul Kumar</h5>
                    <p className="text-accent text-xs font-medium uppercase mt-1">Partner</p>
                  </div>
                  <div className="md:w-2/3 flex flex-wrap gap-x-6 gap-y-3">
                    {practiceAreas.slice(4).map((area, index) => (
                      <div key={index} className="flex items-center text-black/80">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{area}</span>
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
                  View Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
