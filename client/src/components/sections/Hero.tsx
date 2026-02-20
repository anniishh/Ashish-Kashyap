import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_legal_background_texture.png";
import portrait from "@assets/image_1769096431460.png";

export function Hero() {
  return (
    <section id="home" className="relative min-vh-100 d-flex align-items-center pt-5 pt-md-0 overflow-hidden bg-white">
      {/* Background Subtle Gradient */}
      <div className="position-absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--color-muted),_transparent_50%)]"></div>

      <div className="container relative z-10">
        <div className="row align-items-center gy-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-12 col-lg-7"
          >
            <div className="d-inline-block px-3 py-1 mb-4 border border-accent/20 rounded-pill bg-accent/5 backdrop-blur-sm">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Supreme Court & High Court Advocate
              </span>
            </div>
            <h1 className="display-4 display-md-2 font-serif fw-bold text-dark mb-4">
              Advocate <br className="d-none d-sm-block" />
              <span className="text-danger">Ashish Kashyap</span>
            </h1>
            <p className="lead text-muted-foreground mb-5 max-w-lg">
              Deals in Criminal Cases | CBI | ED | NIA. Providing strategic legal counsel with unwavering integrity.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/contact#schedule-consultation">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent fw-bold px-4 py-3">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-foreground border-border hover:bg-muted px-4 py-3">
                  Expertise <ArrowRight className="ms-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-5 d-flex align-items-center gap-4 gap-md-5">
              <div>
                <p className="h2 fw-bold text-foreground fst-italic mb-0">24/7</p>
                <p className="text-xs text-muted-foreground text-uppercase tracking-wider mb-0">Legal Support</p>
              </div>
              <div className="vr h-100 bg-border opacity-50" style={{ minHeight: '3rem' }}></div>
              <div>
                <p className="h2 fw-bold text-foreground mb-0">300+</p>
                <p className="text-xs text-muted-foreground text-uppercase tracking-wider mb-0">Cases Won</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-12 col-lg-5 position-relative"
          >
            <div className="position-relative z-10 rounded-4 overflow-hidden border border-border shadow-lg aspect-[3/4] max-w-md mx-auto">
              <img 
                src={portrait} 
                alt="Advocate Ashish Kashyap" 
                className="w-100 h-100 object-cover"
              />
            </div>
            
            {/* Decorative elements behind the image */}
            <div className="position-absolute top-0 end-0 mt-n3 me-n3 w-25 h-25 border-top border-end border-accent/20 rounded-tr-4 d-none d-md-block" style={{ zIndex: 5 }}></div>
            <div className="position-absolute bottom-0 start-0 mb-n3 ms-n3 w-25 h-25 border-bottom border-start border-accent/20 rounded-bl-4 d-none d-md-block" style={{ zIndex: 5 }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
