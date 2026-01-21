import { motion } from "framer-motion";
import { ExternalLink, Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const newsItems = [
  {
    title: "Manipur Violence: Delhi Court grants CBI transit custody of man accused of looting arms from police",
    source: "India Today NE",
    date: "Oct 22, 2023",
    link: "https://www.indiatodayne.in/manipur/story/manipur-violence-delhi-court-grants-cbi-transit-custody-of-man-accused-of-looting-arms-from-police-698803-2023-10-22",
    image: "https://www.indiatodayne.in/manipur/story/manipur-violence-delhi-court-grants-cbi-transit-custody-of-man-accused-of-looting-arms-from-police-698803-2023-10-22",
    description: "The Delhi High Court has granted transit custody of a person accused of looting arms from police stations during the Manipur ethnic violence."
  },
  {
    title: "Manipur: Transnational conspiracy case, NIA opposes bail plea of Moirangthem Anand Singh",
    source: "Organiser",
    date: "Oct 28, 2023",
    link: "https://organiser.org/2023/10/28/203738/bharat/manipur/manipur-transnational-conspiracy-case-nia-opposes-bail-plea-of-moirangthem-anand-singh/",
    image: "https://organiser.org/wp-content/uploads/2023/10/Manipur-NIA.jpg",
    description: "National Investigation Agency (NIA) has strongly opposed the bail plea of the prime accused in a case related to transnational conspiracy."
  },
  {
    title: "NIA case: Moirangthem Anand Singh withdraws bail plea",
    source: "WebIndia123",
    date: "Oct 17, 2023",
    link: "https://news.webindia123.com/news/articles/India/20231017/4130084.html",
    image: "https://news.webindia123.com/news/articles/India/20231017/4130084.html",
    description: "Accused Moirangthem Anand Singh has withdrawn his bail application before the Special NIA Court."
  },
  {
    title: "Manipur Transnational Conspiracy Case: Moirangthem Anand Singh withdraws bail plea from NIA Court",
    source: "The Sentinel",
    date: "Oct 17, 2023",
    link: "https://www.sentinelassam.com/north-east-india-news/manipur/manipur-transnational-conspiracy-case-moirangthem-anand-singh-withdraws-bail-plea-from-nia-court-674645",
    image: "https://www.sentinelassam.com/wp-content/uploads/2023/10/NIA.jpg",
    description: "Significant legal update in the Manipur transnational conspiracy case as the main accused withdraws his petition."
  },
  {
    title: "Supreme Court grants bail to Manipur conspiracy accused after prolonged custody",
    source: "India Today NE",
    date: "Dec 11, 2025",
    link: "https://www.indiatodayne.in/manipur/story/supreme-court-grants-bail-to-manipur-conspiracy-accused-after-prolonged-custody-1316127-2025-12-11",
    image: "https://www.indiatodayne.in/manipur/story/supreme-court-grants-bail-to-manipur-conspiracy-accused-after-prolonged-custody-1316127-2025-12-11",
    description: "The Supreme Court observed that prolonged pre-trial detention violates the right to personal liberty while granting bail."
  }
];

export function NewsHighlights({ fullPage = false }) {
  const displayItems = fullPage ? newsItems : newsItems.slice(0, 4);

  return (
    <section className={`py-24 ${fullPage ? 'bg-muted/30' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {fullPage ? "Legal Cases & News Archive" : "Case Highlights & Media"}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Significant legal developments and media coverage of high-profile representations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {displayItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-accent/50 transition-all group flex flex-col overflow-hidden bg-white shadow-sm">
                <div className="aspect-video w-full overflow-hidden bg-muted relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <Newspaper size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.source}</span>
                  </div>
                  <h3 className={`font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors ${fullPage ? 'text-2xl' : 'text-xl line-clamp-2'}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
                    <div className="flex items-center text-muted-foreground text-xs font-bold tracking-wider">
                      <Calendar size={14} className="mr-2" />
                      {item.date}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-primary text-primary-foreground hover:bg-accent h-10 px-6 font-bold"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Read Full Article <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {!fullPage && (
          <div className="mt-16 text-center">
            <Link href="/cases">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white transition-all px-8">
                View All Cases <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
