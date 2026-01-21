import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Adv. <span className="text-primary">Ashish Kashyap</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Providing expert legal counsel with integrity and dedication. Defending your rights and securing your future.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#practice" className="text-muted-foreground hover:text-primary transition-colors">Practice Areas</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-primary transition-colors">Legal News</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Criminal Defense</li>
              <li className="text-muted-foreground">Civil Litigation</li>
              <li className="text-muted-foreground">Corporate Law</li>
              <li className="text-muted-foreground">Family Law</li>
              <li className="text-muted-foreground">Real Estate</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  Supreme Court of India,<br />
                  Tilak Marg, Mandi House,<br />
                  New Delhi, Delhi 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">contact@advashishkashyap.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adv. Ashish Kashyap. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
