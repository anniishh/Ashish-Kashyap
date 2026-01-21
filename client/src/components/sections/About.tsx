import { motion } from "framer-motion";
import { Scale, Gavel, BookOpen, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  { icon: Scale, title: "Civil Litigation", desc: "Property disputes, family law, and contract breaches." },
  { icon: Gavel, title: "Criminal Defense", desc: "Strong representation in all criminal proceedings." },
  { icon: BookOpen, title: "Corporate Law", desc: "Legal advisory for businesses, startups, and compliance." },
  { icon: Users, title: "Family Disputes", desc: "Divorce, custody, and inheritance matters." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* About Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              A Legacy of <span className="text-primary">Legal Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Advocate Ashish Kashyap is a distinguished legal practitioner with over 15 years of experience in the Indian judiciary system. Practicing primarily at the Supreme Court of India and the High Court of Delhi, he has built a reputation for meticulous case preparation and aggressive advocacy.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              His approach combines deep legal knowledge with strategic thinking to deliver favorable outcomes for his clients. Whether it's a high-stakes corporate dispute or a sensitive family matter, Adv. Kashyap brings the same level of dedication and integrity to every case.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Clock className="text-primary h-6 w-6" />
                <div>
                  <h4 className="font-bold text-white">24/7 Support</h4>
                  <p className="text-xs text-muted-foreground">Emergency Consultation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-primary h-6 w-6" />
                <div>
                  <h4 className="font-bold text-white">Top Rated</h4>
                  <p className="text-xs text-muted-foreground">Best Legal Services</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                   <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-lg">
                      <h3 className="text-4xl font-bold text-primary mb-1">98%</h3>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                   </div>
                   <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-lg">
                      <h3 className="text-4xl font-bold text-primary mb-1">120+</h3>
                      <p className="text-sm text-muted-foreground">Corporate Clients</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-lg">
                      <h3 className="text-4xl font-bold text-primary mb-1">500+</h3>
                      <p className="text-sm text-muted-foreground">Cases Resolved</p>
                   </div>
                   <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-lg">
                      <h3 className="text-4xl font-bold text-primary mb-1">15+</h3>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Practice Areas */}
        <div id="practice">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Practice Areas</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
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
                <Card className="bg-card border-white/5 h-full hover:border-primary/50 transition-colors group">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <area.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">{area.title}</h3>
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
