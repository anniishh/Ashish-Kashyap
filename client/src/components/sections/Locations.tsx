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
    title: "Law Firm",
    address: "Office No. U-144(a), Near Shakarpur Metro Station Gate No. 4, Shakarpur, East District, Delhi-110092",
    firmName: "M/s AR & Associates",
    type: "Law Firm",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.876793655182!2d77.2774293!3d28.6334733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad6a394347%3A0x7707e15509d30c5e!2sShakarpur%20Metro%20Station%20Gate%20No.%204!5e0!3m2!1sen!2sin!4v1737466540000!5m2!1sen!2sin"
  },
  {
    title: "Siwan Office",
    address: "Advocate Ashish Kashyap, Nai Basti Mahadeva, near Gandhi Maidan, Siwan, Bihar - 841226",
    type: "Regional Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.468234850123!2d84.3562!3d26.2196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fb68f543e319%3A0x6d5663f7215f606a!2sGandhi%20Maidan%2C%20Siwan!5e0!3m2!1sen!2sin!4v1737466540000!5m2!1sen!2sin"
  },
  {
    title: "Kolkata Office",
    address: "Abode Arrangers, 1, Porabazar-Lane, Kolkata - 700020",
    type: "Regional Office",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.23456789!2d88.3456789!3d22.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027705353d7197%3A0x60c77607a3c31627!2s1%2C%20Pura%20Bazar%20Ln%2C%20Garcha%2C%20Ballygunge%2C%20Kolkata%2C%20West%20Bengal%20700020!5e0!3m2!1sen!2sin!4v1737466540000!5m2!1sen!2sin"
  }
];

export function Locations({ fullWidth = false, limit = null }) {
  const displayLocations = limit ? locations.slice(0, limit) : locations;

  return (
    <section id="locations" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 font-serif fw-bold text-foreground mb-3">Office Locations</h2>
          <div className="w-25 h-1 bg-accent mx-auto mb-4" style={{ height: '4px', maxWidth: '100px' }}></div>
          <p className="lead text-muted-foreground max-w-2xl mx-auto">
            Visit us at our offices for professional legal consultation.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {displayLocations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`col-12 ${fullWidth ? 'col-lg-12' : 'col-md-6 col-lg-6'}`}
            >
              <div className={`card h-100 overflow-hidden border-border hover-border-accent transition-all bg-white shadow-sm flex-column ${fullWidth ? 'flex-md-row' : ''}`}>
                <div className={`${fullWidth ? 'col-md-6 min-vh-50' : 'ratio ratio-16x9'} position-relative bg-muted overflow-hidden`}>
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="position-absolute inset-0 transition-all duration-500"
                  ></iframe>
                </div>
                <div className={`card-body p-4 p-md-5 ${fullWidth ? 'col-md-6 d-flex flex-column justify-content-center' : 'd-flex flex-column'}`}>
                  <div className="d-flex align-items-center gap-3 text-accent mb-3">
                    <MapPin className="h-6 w-6 shrink-0" />
                    <h3 className="h4 font-serif fw-bold text-foreground mb-0">
                      {loc.title}
                      {loc.firmName && <small className="d-block h6 font-sans fw-normal text-muted-foreground mt-1">{loc.firmName}</small>}
                    </h3>
                  </div>
                  <p className="card-text text-muted-foreground mb-4 fs-5 leading-relaxed">
                    {loc.address}
                  </p>
                  <Button 
                    variant="outline" 
                    className="btn-outline-danger border-accent text-accent hover-bg-accent hover-text-white transition-all w-fit mt-auto"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`, '_blank')}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
