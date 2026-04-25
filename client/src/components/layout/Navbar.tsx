import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@assets/adv_logo_1768985356594.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Cases", href: "/cases" },
    { name: "Case Files", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-border py-3 md:py-4 shadow-sm" : "bg-white/95 md:bg-white/80 md:bg-transparent py-4 md:py-6 shadow-sm md:shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-20 flex justify-between items-center gap-8 lg:gap-12">
        <Link href="/">
          <div className="flex items-center cursor-pointer shrink-0 mr-auto">
            <img src={logo} alt="Adv. Ashish Kashyap" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-widest relative group whitespace-nowrap ${
                location === link.href ? "text-accent" : "text-black hover:text-accent"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-px bg-accent transform origin-left transition-transform duration-300 ease-out ${
                location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></span>
            </Link>
          ))}
          <Link href="/contact#schedule-consultation">
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-accent transition-colors md:px-3 md:text-xs lg:px-4 lg:text-sm whitespace-nowrap">
              <Calendar className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" /> <span className="hidden lg:inline">Book Appointment</span><span className="lg:hidden">Appointment</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors uppercase tracking-widest ${
                    location === link.href ? "text-accent" : "text-foreground/70"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact#schedule-consultation">
                <Button className="w-full bg-primary text-primary-foreground" onClick={() => setMobileMenuOpen(false)}>
                  Book Appointment
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
