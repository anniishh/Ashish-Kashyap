import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Delhi High Court",
    address: "Consultation Room, Lawyer's Chamber's Block, Delhi High Court",
    type: "Court Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.502998632616!2d77.2274!3d28.6146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d6e3006953%3A0x63351d3824151703!2sDelhi%20High%20Court!5e0!3m2!1sen!2sin!4v1737466540000!5m2!1sen!2sin"
  },
  {
    title: "East Delhi Office",
    address: "Office No. U-144(a), Near Shakarpur Metro Station Gate No. 4, Shakarpur, East District, Delhi-110092",
    firmName: "M/s AR & Associates",
    type: "Law Firm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.876793655182!2d77.2774293!3d28.6334733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad6a394347%3A0x7707e15509d30c5e!2sShakarpur%20Metro%20Station%20Gate%20No.%204!5e0!3m2!1sen!2sin!4v1737466540000!5m2!1sen!2sin"
  },
  {
    title: "Noida Office",
    address: "C-130, 3rd Floor, Sector-9, Noida-201301",
    type: "Corporate Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.744123547893!2d77.3129!3d28.5774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4532a68579f%3A0x6310246473177656!2sSector%209%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
  }
];

export function Locations({ fullWidth = false }) {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Office Locations</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us at our offices for professional legal consultation.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${fullWidth ? 'gap-12' : 'md:grid-cols-2 lg:grid-cols-3 gap-8'} max-w-7xl mx-auto`}>
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={fullWidth ? "w-full" : ""}
            >
              <Card className={`overflow-hidden border-border hover:border-accent/50 transition-all bg-white shadow-sm flex flex-col ${fullWidth ? 'md:flex-row' : ''} h-full`}>
                <div className={`${fullWidth ? 'md:w-1/2 h-[350px] md:h-[400px]' : 'h-72'} w-full bg-muted relative shrink-0`}>
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
                <CardContent className={`p-8 ${fullWidth ? 'md:w-1/2 flex flex-col justify-center' : 'flex flex-col flex-grow'}`}>
                  <div className="flex items-center space-x-3 text-accent mb-4">
                    <MapPin className="h-6 w-6" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    {loc.title}
                    {loc.firmName && <span className="block text-sm font-sans font-normal text-muted-foreground mt-1">{loc.firmName}</span>}
                  </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed flex-grow">
                    {loc.address}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-all w-full md:w-fit mt-auto"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`, '_blank')}
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
