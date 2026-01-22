import { motion } from "framer-motion";
import { Scale, Gavel, BookOpen, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  { icon: Scale, title: "Civil Litigation", desc: "Property disputes, family law, and contract breaches." },
  { icon: Gavel, title: "Criminal Defense", desc: "Strong representation in all criminal proceedings." },
  { icon: BookOpen, title: "Corporate Law", desc: "Legal advisory for businesses, startups, and compliance." },
  { icon: Users, title: "Family Disputes", desc: "Divorce, custody, and inheritance matters." },
];

import justiceStatue from "@assets/image_1769099455444.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
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
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-square">
                <img 
                  src={justiceStatue} 
                  alt="Lady Justice" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white text-xs font-serif italic">"Justice delayed is justice denied."</p>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                    <h3 className="text-4xl font-bold text-accent mb-1">98%</h3>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                    <h3 className="text-4xl font-bold text-accent mb-1">24/7</h3>
                    <p className="text-sm text-muted-foreground">Legal Support</p>
                 </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                 <h3 className="text-4xl font-bold text-accent mb-1">500+</h3>
                 <p className="text-sm text-muted-foreground">Cases Resolved</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-md">
                 <h3 className="text-4xl font-bold text-accent mb-1">120+</h3>
                 <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
           </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="bg-white p-10 rounded-3xl border border-border shadow-sm">
            <h4 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 flex items-center">
              <Scale className="text-accent mr-3 h-8 w-8" /> Cases deals in
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Criminal Cases",
                "CBI Cases",
                "ED Matters",
                "NIA Matters",
                "Prevention of Money Laundering Act",
                "Economic Offenses",
                "Special Acts Litigation",
                "Bail Matters",
                "Corporate Criminal Liability"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg text-muted-foreground p-4 bg-muted/30 rounded-xl border border-transparent hover:border-accent/20 hover:bg-white transition-all group">
                  <div className="w-2 h-2 rounded-full bg-accent mr-3 group-hover:scale-125 transition-transform"></div>
                  {item}
                </li>
              ))}
            </ul>
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
