import { ShieldCheck, Globe, Award, ChevronRight } from "lucide-react";

export function Affiliations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
              Global Affiliations & <span className="text-accent">Memberships</span>
            </h2>
            <p className="text-black/70 text-lg leading-relaxed">
              Advocate Ashish Kashyap is formally recognized and holds prestigious memberships in international organizations dedicated to human rights and crime control, demonstrating a commitment to justice beyond the courtroom.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start">
                <div className="mt-1 bg-accent/10 p-2 rounded-full mr-4">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Executive Member</h4>
                  <p className="text-black/70">International Human Rights & Crime Control Council</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-accent/10 p-2 rounded-full mr-4">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Global Recognition</h4>
                  <p className="text-black/70">Operating under the High Commission of Human Rights Switzerland</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-accent/10 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">Statutory Compliance</h4>
                  <p className="text-black/70">Registered under Govt. of India Trust Registration Act 1882</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-gray-50 border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full rounded-tr-2xl -z-0"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 border-b border-black/10 pb-6">
                  <div className="h-16 w-16 bg-accent text-white rounded-full flex items-center justify-center shadow-inner">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black uppercase tracking-wide">IHRCCC</h3>
                    <p className="text-accent font-medium text-sm">Official Identity Credential</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-black/50 uppercase font-semibold mb-1">ID Number</p>
                    <p className="text-black font-mono font-medium">JKQT/IH24/73380</p>
                  </div>
                  <div>
                    <p className="text-xs text-black/50 uppercase font-semibold mb-1">UID Number</p>
                    <p className="text-black font-mono font-medium">17KTQSZIH1897</p>
                  </div>
                  <div>
                    <p className="text-xs text-black/50 uppercase font-semibold mb-1">Jurisdiction / Location</p>
                    <p className="text-black font-medium">Haryana (All India)</p>
                  </div>
                  <div>
                    <p className="text-xs text-black/50 uppercase font-semibold mb-1">Validity Status</p>
                    <p className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold uppercase">Lifetime</p>
                    <span className="text-xs text-black/50 ml-2">(Issued Feb 2025)</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-black/10">
                  <p className="text-xs text-black/40 italic text-center">
                    Authorized Non-Governmental Organization working for the protection of human rights and crime control globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
