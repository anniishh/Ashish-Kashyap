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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white p-4 rounded-2xl shadow-sm border border-black/5 mb-8"
          >
            <img src={logo} alt="A.R. & Associates" className="h-16 md:h-20 object-contain" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
            A.R. & ASSOCIATES
          </h2>
          <p className="text-xl text-accent font-medium uppercase tracking-widest mb-6">
            Legal Advisor & Solicitor
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Excellence in Criminal & Civil Litigation</h3>
              <p className="text-black/70 text-lg leading-relaxed">
                A.R. & Associates is a premier law firm dedicated to providing exceptional legal representation across a broad spectrum of practice areas. Founded on the principles of integrity, aggressive advocacy, and strategic counsel, the firm operates at the highest levels of the Indian judicial system.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-black mb-4 border-b border-black/10 pb-2 inline-block">Areas of Practice</h4>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {practiceAreas.map((area, index) => (
                  <div key={index} className="flex items-center text-black/80">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-accent/20">
                <img src={ashishImg} alt="Adv. Ashish Kashyap" className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="text-lg font-bold text-black">Adv. Ashish Kashyap</h4>
              <p className="text-accent text-sm font-medium mb-3">Partner</p>
              <a href="tel:+918851427770" className="mt-auto px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-black/80 transition-colors w-full">
                +91 88514 27770
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-accent/20">
                <img src={rahulImg} alt="Adv. Rahul Kumar" className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="text-lg font-bold text-black">Adv. Rahul Kumar</h4>
              <p className="text-accent text-sm font-medium mb-3">Partner</p>
              <a href="tel:+919716324341" className="mt-auto px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-black/80 transition-colors w-full mb-3">
                +91 9716324341
              </a>
              <Link href="/advocate-rahul" className="flex items-center justify-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors">
                View Profile <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
