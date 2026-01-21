import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact as ContactSection } from "@/components/sections/Contact";
import { Locations } from "@/components/sections/Locations";
import { BusinessCard } from "@/components/sections/BusinessCard";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-20">
        <Locations />
        <BusinessCard />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
