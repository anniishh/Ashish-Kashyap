import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BusinessCard } from "@/components/sections/BusinessCard";
import { About } from "@/components/sections/About";
import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <BusinessCard />
        <About />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
