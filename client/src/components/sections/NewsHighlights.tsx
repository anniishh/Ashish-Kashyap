import { motion } from "framer-motion";
import { ExternalLink, Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import image1 from "@assets/image_1768992319485.png";
import image2 from "@assets/image_1768992478843.png";
import image4 from "@assets/image_1768992955899.png";
import image5 from "@assets/image_1768993034423.png";

import imageLast from "@assets/image_1769099289328.png";

const newsItems = [
  {
    title: "Manipur Violence: Delhi Court grants CBI transit custody of man accused of looting arms from police",
    source: "India Today NE",
    date: "Oct 22, 2023",
    link: "https://www.indiatodayne.in/manipur/story/manipur-violence-delhi-court-grants-cbi-transit-custody-of-man-accused-of-looting-arms-from-police-698803-2023-10-22",
    image: image1,
    description: "The Delhi High Court has granted transit custody of a person accused of looting arms from police stations during the Manipur ethnic violence."
  },
  {
    title: "Manipur: Transnational conspiracy case, NIA opposes bail plea of Moirangthem Anand Singh",
    source: "Organiser",
    date: "Oct 28, 2023",
    link: "https://organiser.org/2023/10/28/203738/bharat/manipur/manipur-transnational-conspiracy-case-nia-opposes-bail-plea-of-moirangthem-anand-singh/",
    image: image2,
    description: "National Investigation Agency (NIA) has strongly opposed the bail plea of the prime accused in a case related to transnational conspiracy."
  },
  {
    title: "NIA case: Moirangthem Anand Singh withdraws bail plea",
    source: "WebIndia123",
    date: "Oct 17, 2023",
    link: "https://news.webindia123.com/news/articles/India/20231017/4130084.html",
    image: "https://news.webindia123.com/news/articles/India/20231017/4130084.html",
    description: "Accused Moirangthem Anand Singh has withdrawn his bail application before the Special NIA Court."
  },
  {
    title: "Manipur Transnational Conspiracy Case: Moirangthem Anand Singh withdraws bail plea from NIA Court",
    source: "The Sentinel",
    date: "Oct 17, 2023",
    link: "https://www.sentinelassam.com/north-east-india-news/manipur/manipur-transnational-conspiracy-case-moirangthem-anand-singh-withdraws-bail-plea-from-nia-court-674645",
    image: image4,
    description: "Significant legal update in the Manipur transnational conspiracy case as the main accused withdraws his petition."
  },
  {
    title: "Supreme Court grants bail to Manipur conspiracy accused after prolonged custody",
    source: "India Today NE",
    date: "Dec 11, 2025",
    link: "https://www.indiatodayne.in/manipur/story/supreme-court-grants-bail-to-manipur-conspiracy-accused-after-prolonged-custody-1316127-2025-12-11",
    image: image5,
    description: "The Supreme Court observed that prolonged pre-trial detention violates the right to personal liberty while granting bail."
  },
  {
    title: "J&K terror funding case: Four accused 'voluntarily' agreed to plead guilty in ED case",
    source: "ANI News",
    date: "Feb 3, 2023",
    link: "https://www.aninews.in/news/national/general-news/j-k-terror-funding-case-four-accused-voluntarily-agreed-to-plead-guilty-in-ed-case20230203182946/",
    image: imageLast,
    description: "In a significant development in a J&K terror funding case, four accused persons have voluntarily agreed to plead guilty before a Delhi court in a money laundering case."
  },
  {
    title: "J-K terror funding case: 4 associated with Hizbul Mujahideen plead guilty of money laundering",
    source: "Kashmir Digest",
    date: "Feb 4, 2023",
    link: "https://www.kashmirdigest.com/j-k-terror-funding-case-4-associated-with-hizbul-mujahideen-plead-guilty-of-money-laundering/",
    image: "https://kashmirdigest.com/wp-content/uploads/2021/08/court.jpg",
    description: "Four people associated with the Hizbul Mujahideen voluntarily pleaded guilty before a Delhi court in a money laundering case related to the Jammu Kashmir Affectees Relief Trust terror funding matter."
  },
  {
    title: "Delhi court grants bail to person accused of 'looting arms' from police during Manipur ethnic violence",
    source: "ANI News",
    date: "Dec 1, 2025",
    link: "https://www.aninews.in/news/national/general-news/delhi-court-grants-bail-to-person-accused-of-looting-arms-from-police-during-manipur-ethnic-violence20251201182946/",
    image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20231022131234.jpg",
    description: "A Delhi Court has granted bail to a person accused of looting arms and ammunition from a police station during the Manipur ethnic violence, noting the lack of concrete evidence for prolonged detention."
  },
  {
    title: "J-K terror funding case: 4 associated with Hizbul Mujahideen plead guilty of money laundering",
    source: "The Print",
    date: "Feb 3, 2023",
    link: "https://theprint.in/india/j-k-terror-funding-case-4-associated-with-hizbul-mujahideen-plead-guilty-of-money-laundering/1352623/",
    image: "https://staticprintenglish.theprint.in/wp-content/uploads/2022/01/logo_800x149_transp-11.png",
    description: "Four people associated with the Hizbul Mujahideen voluntarily pleaded guilty before a Delhi court in a money laundering case related to the Jammu Kashmir Affectees Relief Trust (JKART) terror funding matter."
  },
  {
    title: "आनंद सिंह ने मणिपुर में हिंसा के दौरान विदेशी गुटों के साथ किया था षड़यंत्र (Anand Singh had conspired with foreign groups during the violence in Manipur)",
    source: "Hindustan",
    date: "Oct 28, 2023",
    link: "https://www.livehindustan.com/ncr/new-delhi/story-anand-singh-had-conspired-with-foreign-groups-during-the-violence-in-manipur-8902279.html",
    image: "https://www.livehindustan.com/lh-img/uploadimage/library/2020/10/29/16_9/16_9_3/default-image384x216.jpg",
    description: "National Investigation Agency (NIA) opposed the bail plea of Moirangthem Anand Singh, stating he was arrested with sophisticated weapons and conspired with foreign groups to wage war against the government."
  }
];

export function NewsHighlights({ fullPage = false }) {
  const displayItems = fullPage ? newsItems : newsItems.slice(0, 1);

  return (
    <section className={`py-5 ${fullPage ? 'bg-muted/30' : 'bg-white'}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 font-serif fw-bold text-foreground mb-3">
            {fullPage ? "Legal Cases & News Archive" : "Case Highlights & Media"}
          </h2>
          <div className="w-25 h-1 bg-accent mx-auto mb-4" style={{ height: '4px', maxWidth: '100px' }}></div>
          <p className="lead text-muted-foreground max-w-2xl mx-auto">
            Significant legal developments and media coverage of high-profile representations.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {displayItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-12"
            >
              <div className="card h-100 border-border hover-border-accent transition-all group overflow-hidden bg-white shadow-sm flex-column flex-md-row">
                <div className="col-md-5 ratio ratio-16x9 ratio-md-auto overflow-hidden bg-muted position-relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-100 h-100 group-hover-scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                  <div className="position-absolute inset-0 bg-gradient-to-t from-black-50 to-transparent" />
                </div>
                <div className="card-body col-md-7 p-4 p-md-5 d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center gap-2 text-accent mb-3">
                    <Newspaper size={18} />
                    <span className="text-xs fw-bold text-uppercase tracking-widest">{item.source}</span>
                  </div>
                  <h3 className={`font-serif fw-bold text-foreground mb-3 group-hover-text-accent transition-colors ${fullPage ? 'display-6' : 'h3 text-truncate-2'}`}>
                    {item.title}
                  </h3>
                  <p className="card-text text-muted-foreground mb-4 text-truncate-3 fs-5 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-4 d-flex flex-wrap align-items-center justify-content-between border-top border-border border-opacity-50 gap-3">
                    <div className="d-flex align-items-center text-muted-foreground text-sm fw-bold tracking-wider">
                      <Calendar size={16} className="me-2" />
                      {item.date}
                    </div>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="btn-primary bg-primary text-primary-foreground hover-bg-accent px-4 py-2 fw-bold"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Read Full Article <ExternalLink size={18} className="ms-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!fullPage && (
          <div className="mt-5 text-center">
            <Link href="/cases">
              <Button variant="outline" className="btn-outline-danger border-accent text-accent hover-bg-accent hover-text-white transition-all px-4 py-2">
                View All Cases <ArrowRight className="ms-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
