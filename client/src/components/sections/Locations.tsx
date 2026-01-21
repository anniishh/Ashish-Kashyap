import { MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    title: "Delhi High Court",
    address: "Consultation Room, Lawyer's Chamber's Block, Delhi High Court",
    type: "Court Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.502998632616!2d77.2274!3d28.6146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d6e3006953%3A0x63351d3824151703!2sDelhi%20High%20Court!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
  },
  {
    title: "Noida Office",
    address: "C-130, 3rd Floor, Sector-9, Noida-201301",
    type: "Corporate Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.744123547893!2d77.3129!3d28.5774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4532a68579f%3A0x6310246473177656!2sSector%209%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
  }
];

export function Locations() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Office Locations</h2>
          <p className="text-muted-foreground">Visit us for a consultation at your nearest location.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <Card key={index} className="bg-white border-border overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 w-full bg-muted relative">
                <iframe 
                  src={loc.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <CardHeader className="pb-2">
                <div className="inline-block px-2 py-1 bg-accent/10 rounded mb-2 w-fit">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">{loc.type}</span>
                </div>
                <CardTitle className="text-foreground text-xl font-serif">{loc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{loc.address}</span>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">Mon - Sat: 10:00 AM - 07:00 PM</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
