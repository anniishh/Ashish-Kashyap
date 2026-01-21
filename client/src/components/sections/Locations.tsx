import { MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    title: "Main Office",
    address: "Chamber No. 101, Supreme Court Lawyers Chambers, Tilak Marg, New Delhi",
    type: "Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.269415730302!2d77.23847831508215!3d28.621685882422055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35097c5555%3A0xf63967d69d7612!2sSupreme%20Court%20of%20India!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
  },
  {
    title: "Court Chambers",
    address: "Chamber 45, High Court of Delhi, Sher Shah Road, New Delhi",
    type: "Court",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.502998632616!2d77.2274!3d28.6146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d6e3006953%3A0x63351d3824151703!2sDelhi%20High%20Court!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
  },
  {
    title: "Residence Office",
    address: "A-123, Greater Kailash Part 1, New Delhi - 110048",
    type: "Home Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.150493867637!2d77.2345!3d28.5529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24813589139%3A0x24740280b22a0129!2sGreater%20Kailash%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
  }
];

export function Locations() {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Visit Our Locations</h2>
          <p className="text-muted-foreground">Multiple locations for your convenience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <Card key={index} className="bg-card border-white/5 overflow-hidden flex flex-col">
              <div className="h-48 w-full bg-muted relative">
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
              <CardHeader>
                <div className="inline-block px-2 py-1 bg-primary/10 rounded mb-2 w-fit">
                  <span className="text-xs font-bold text-primary uppercase">{loc.type}</span>
                </div>
                <CardTitle className="text-white text-xl font-serif">{loc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{loc.address}</span>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
