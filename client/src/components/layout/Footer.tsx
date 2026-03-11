import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logo from "@assets/adv_logo_1768985356594.png";
import whatsappIcon from "@assets/whatsapp-icon_1768994029624.png";

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=918851427770&text&type=phone_number&app_absent=0";

  return (
    <footer className="bg-muted border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="Adv. Ashish Kashyap" className="h-10 w-auto mb-6" />
            <p className="text-black/80 mb-6 leading-relaxed">
              Providing expert legal counsel with integrity and dedication. Defending your rights and securing your future.
            </p>
            <div className="flex space-x-3">
              <Button asChild variant="outline" size="icon" className="rounded-full border-black/20 text-black hover:bg-accent hover:text-white hover:border-accent transition-colors">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-black/20 text-black hover:bg-accent hover:text-white hover:border-accent transition-colors">
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><XIcon /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-black/20 text-black hover:bg-accent hover:text-white hover:border-accent transition-colors">
                <a href="https://www.linkedin.com/in/advocate-ashish-kashyap-4080351b3/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-black/20 text-black hover:bg-accent hover:text-white hover:border-accent transition-colors">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Instagram className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-black/20 text-black hover:bg-accent hover:text-white hover:border-accent transition-colors group/icon">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4 object-contain group-hover/icon:invert group-hover/icon:brightness-0 transition-all filter-none" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-black hover:text-accent transition-colors relative group">Home
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link></li>
              <li><Link href="/about" className="text-black hover:text-accent transition-colors relative group">About Me
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link></li>
              <li><Link href="/cases" className="text-black hover:text-accent transition-colors relative group">Cases
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link></li>
              <li><Link href="/contact" className="text-black hover:text-accent transition-colors relative group">Contact & Locations
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-black mb-6">Expertise</h4>
            <ul className="space-y-3">
              <li className="text-black/80">Criminal Cases</li>
              <li className="text-black/80">CBI / ED / NIA Matters</li>
              <li className="text-black/80">Civil Litigation</li>
              <li className="text-black/80">Corporate Law</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold text-black mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-black/80">
                  Delhi High Court,<br />
                  Lawyer's Chamber's Block,<br />
                  New Delhi
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <span className="text-black/80">+91 88514 27770</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <span className="text-black/80">advashishkashyap@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adv. Ashish Kashyap. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-black/70">
            <a href="#" className="hover:text-black transition-colors relative group">Privacy Policy
              <span className="absolute -bottom-1 left-0 w-full h-px bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="hover:text-black transition-colors relative group">Terms of Service
              <span className="absolute -bottom-1 left-0 w-full h-px bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
