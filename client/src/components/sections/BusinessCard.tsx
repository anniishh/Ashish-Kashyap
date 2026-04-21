import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Share2, Map, Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

import whatsappIcon from "@assets/wahtsapp_1776751866688.png";
import facebookIcon from "@assets/facebook_1776751866689.png";
import twitterIcon from "@assets/twitter_1776751866689.png";
import linkedinIcon from "@assets/linkedin_1776751866688.png";
import instagramIcon from "@assets/instagram_1776751866688.png";

export function BusinessCard() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=918851427770&text&type=phone_number&app_absent=0";

  const handleDownload = () => {
    const printContent = document.getElementById('printable-card');
    if (!printContent) return;

    const printWindow = window.open('', '', 'width=900,height=600');
    if (!printWindow) return;

    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(s => s.outerHTML)
      .join('');

    printWindow.document.write(`
      <html>
        <head>
          <title>Advocate Ashish Kashyap - Business Card</title>
          ${styles}
          <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
            body { 
              margin: 0; 
              padding: 0; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              min-height: 100vh;
              background: #f9fafb;
            }
            .printable-card { 
              width: 170mm !important; 
              max-width: 170mm !important;
              box-shadow: none !important;
              border: 1px solid #eee !important;
              margin: 0 !important;
              visibility: visible !important;
              display: block !important;
              opacity: 1 !important;
            }
            @media print {
              body { background: white; }
              @page { margin: 0; size: auto; }
            }
            .print\\:hidden { display: none !important; }
          </style>
        </head>
        <body>
          <div class="printable-card">
            ${printContent.innerHTML}
          </div>
          <script>
            setTimeout(() => {
              window.print();
              window.close();
            }, 500);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleShare = async () => {
    const shareUrl = "https://advashishkashyap.vercel.app/";
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Advocate Ashish Kashyap',
          text: 'Digital Business Card of Adv. Ashish Kashyap',
          url: shareUrl,
        });
      } catch (err) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`);
      }
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`);
    }
  };

  return (
    <section id="business-card-section" className="py-20 bg-muted/30 relative overflow-hidden print:p-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 print:max-w-none print:p-0">
        <div className="text-center mb-16 print:hidden">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Digital Business Card</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scan or tap to save my contact details instantly.
          </p>
        </div>

        <div className="flex justify-center print:block">
          <motion.div 
            id="printable-card"
            className="w-full max-w-3xl bg-white border border-black/5 rounded-2xl overflow-hidden shadow-2xl relative printable-card print:shadow-none print:border-none print:max-w-none"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Card Header Design */}
            <div className="h-1.5 bg-accent"></div>
            
            <div className="p-6 md:p-10 relative">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-1">Ashish Kashyap</h3>
                  <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Advocate</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Criminal Cases", "CBI", "ED", "NIA"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-muted rounded-full text-[10px] font-medium text-muted-foreground border border-border uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 print:hidden">
                    {[
                      { icon: () => <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />, url: whatsappUrl },
                      { icon: () => <img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" />, url: "https://www.facebook.com/" },
                      { icon: () => <img src={instagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />, url: "https://www.instagram.com/" },
                      { icon: () => <img src={twitterIcon} alt="Twitter" className="w-8 h-8 object-contain" />, url: "https://x.com/" },
                      { icon: () => <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 object-contain" />, url: "https://www.linkedin.com/in/advocate-ashish-kashyap-4080351b3/" }
                    ].map((item, i) => (
                      <a 
                        key={i} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex hover:scale-110 transition-transform"
                      >
                        <item.icon />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-white p-2.5 rounded-xl border border-border shadow-sm">
                    <QRCodeSVG 
                      value="https://advashishkashyap.vercel.app/"
                      size={64}
                      level="H"
                      includeMargin={false}
                      imageSettings={{
                        src: "",
                        x: undefined,
                        y: undefined,
                        height: 12,
                        width: 12,
                        excavate: true,
                      }}
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Scan to Save</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 py-6 border-y border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent"><Phone size={14} /></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Mobile</p>
                      <p className="text-sm text-foreground font-medium">+91 88514 27770</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent"><Phone size={14} /></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Office</p>
                      <p className="text-sm text-foreground font-medium">+91 97163 24341</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent"><Mail size={14} /></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Email</p>
                      <p className="text-sm text-foreground font-medium">advashishkashyap@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent shrink-0 mt-1"><MapPin size={14} /></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Delhi High Court</p>
                      <p className="text-[13px] text-foreground font-medium leading-relaxed">
                        Consultation Room, Lawyer's Chamber's Block, Delhi High Court
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent shrink-0 mt-1"><MapPin size={14} /></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Law Firm</p>
                      <p className="text-[13px] text-foreground font-medium leading-relaxed">
                        Office No. U-144(a), Shakarpur, East District, Delhi-110092
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent shrink-0 mt-1"><MapPin size={14} /></div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Regional Offices</p>
                      <p className="text-[13px] text-foreground font-medium leading-relaxed">
                        Siwan (Bihar) | Kolkata (West Bengal)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <p className="text-[10px] text-muted-foreground italic">
                  Deals in Criminal Cases | CBI | ED | NIA
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={handleDownload}
                    className="flex items-center text-accent text-xs font-bold hover:text-foreground transition-colors uppercase tracking-widest"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download Card
                  </button>
                  <button 
                    onClick={handleShare}
                    className="flex items-center text-accent text-xs font-bold hover:text-foreground transition-colors uppercase tracking-widest"
                  >
                    <Share2 className="w-4 h-4 mr-2" /> Share Card
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
