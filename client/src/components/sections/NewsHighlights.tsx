import { motion } from "framer-motion";
import { ExternalLink, Newspaper, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Manipur Violence: Delhi Court grants CBI transit custody of man accused of looting arms from police",
    source: "India Today NE",
    date: "Oct 22, 2023",
    link: "https://www.indiatodayne.in/manipur/story/manipur-violence-delhi-court-grants-cbi-transit-custody-of-man-accused-of-looting-arms-from-police-698803-2023-10-22"
  },
  {
    title: "Manipur: Transnational conspiracy case, NIA opposes bail plea of Moirangthem Anand Singh",
    source: "Organiser",
    date: "Oct 28, 2023",
    link: "https://organiser.org/2023/10/28/203738/bharat/manipur/manipur-transnational-conspiracy-case-nia-opposes-bail-plea-of-moirangthem-anand-singh/"
  },
  {
    title: "NIA case: Moirangthem Anand Singh withdraws bail plea",
    source: "WebIndia123",
    date: "Oct 17, 2023",
    link: "https://news.webindia123.com/news/articles/India/20231017/4130084.html"
  },
  {
    title: "Manipur Transnational Conspiracy Case: Moirangthem Anand Singh withdraws bail plea from NIA Court",
    source: "The Sentinel",
    date: "Oct 17, 2023",
    link: "https://www.sentinelassam.com/north-east-india-news/manipur/manipur-transnational-conspiracy-case-moirangthem-anand-singh-withdraws-bail-plea-from-nia-court-674645"
  },
  {
    title: "Supreme Court grants bail to Manipur conspiracy accused after prolonged custody",
    source: "India Today NE",
    date: "Dec 11, 2025",
    link: "https://www.indiatodayne.in/manipur/story/supreme-court-grants-bail-to-manipur-conspiracy-accused-after-prolonged-custody-1316127-2025-12-11"
  }
];

export function NewsHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Case Highlights & Media</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recent news coverage and significant legal developments in high-profile cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-accent/50 transition-all group flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <Newspaper size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.source}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-accent hover:text-accent hover:bg-accent/5 h-8 px-2"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Read Article <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
