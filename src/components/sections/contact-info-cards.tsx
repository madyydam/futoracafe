import React from 'react';
import { MapPin, Instagram, Phone } from 'lucide-react';

/**
 * ContactInfoCards Component
 * 
 * Clones the information section with three white shadow-cards.
 * Follows the high-level design system:
 * - Font: Montserrat for headings, Roboto for body.
 * - Colors: #FF6B1A (Action Orange) for icons, #F9F3E4 (Background).
 * - Shadow: 0px 10px 30px rgba(0, 0, 0, 0.05).
 */

const ContactInfoCards = () => {
  const cards = [
    {
      title: "Main Branch",
      description: "Shop No 1, Survey No 39/1, Kachare Building, Karve Road Deccan, Pune - 411004",
      icon: <MapPin className="w-6 h-6 text-[#FF6B1A]" />,
      link: "https://www.google.com/maps/dir//Prabhat+road,+Lane+no+8,+Karve+Rd,+near+garware+college,+Kachare+Colony,+Erandwane,+Pune,+Maharashtra+411004/@18.5117342,73.7547428,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bc2bfe916e33b97:0x15461e7fb6de051f!2m2!1d73.8371445!2d18.511752?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Instagram",
      description: "@sa_dosacafe",
      icon: <Instagram className="w-6 h-6 text-[#FF6B1A]" />,
      link: "https://www.instagram.com/sa_dosacafe?igsh=MXFoZ2wxdmFyaTBxNg=="
    },
    {
      title: "Phone Number",
      description: "+91 84465 44544",
      icon: <Phone className="w-6 h-6 text-[#FF6B1A]" />,
      link: "tel:+918446544544"
    }
  ];

  return (
    <section className="bg-[#F9F3E4] pt-20 pb-0">
      <div className="container mx-auto max-w-[1140px] px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-[35px] font-bold text-[#1A1A1A] leading-[1.3] max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Stay connected! Follow us for updates, offers, and more
          </h2>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] pb-12">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-[10px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] text-center transition-transform hover:-translate-y-1 duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                  aria-label={card.title}
                >
                  {card.icon}
                </a>
              </div>
              <h6 className="font-heading text-[18px] font-bold text-[#1A1A1A] mb-[10px]">
                <a 
                  href={card.link} 
                  className="hover:text-[#FF6B1A] transition-colors"
                >
                  {card.title}
                </a>
              </h6>
              <p className="font-body text-[16px] leading-[1.6] text-[#1A1A1A] mb-0">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Brush Divider */}
      <div className="relative w-full h-[100px] overflow-hidden pointer-events-none">
        <svg 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            fill="#FBB64B" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactInfoCards;