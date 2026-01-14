import React from 'react';
import { MapPin, Instagram, Phone } from 'lucide-react';

/**
 * ContactCards Component
 * 
 * Clones the "Stay connected!" section containing three white cards with orange icons 
 * for Main Branch address, Instagram handle, and Phone Number.
 */
export default function ContactCards() {
  const contactInfo = [
    {
      id: 'main-branch',
      title: 'Main Branch',
      content: 'Shop No 1, Survey No 39/1, Kachare Building, Karve Road Deccan, Pune - 411004',
      icon: <MapPin className="text-[#FF7F27]" size={36} fill="#FF7F27" fillOpacity={0.1} />,
      link: 'https://www.google.com/maps/dir//Prabhat+road,+Lane+no+8,+Karve+Rd,+near+garware+college,+Kachare+Colony,+Erandwane,+Pune,+Maharashtra+411004/@18.5117342,73.7547428,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bc2bfe916e33b97:0x15461e7fb6de051f!2m2!1d73.8371445!2d18.511752?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D',
      animation: 'animate-slideInLeft'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      content: '@sa_dosacafe',
      icon: <Instagram className="text-[#FF7F27]" size={36} />,
      link: 'https://www.instagram.com/sa_dosacafe?igsh=MXFoZ2wxdmFyaTBxNg==',
      animation: 'animate-slideInUp'
    },
    {
      id: 'phone',
      title: 'Phone Number',
      content: '+91 84465 44544',
      icon: <Phone className="text-[#FF7F27]" size={36} fill="#FF7F27" fillOpacity={0.1} />,
      link: 'tel:+918446544544',
      animation: 'animate-slideInRight'
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-bounceInUp">
          <h2 className="font-heading text-[24px] md:text-[36px] font-bold text-[#080C0E] leading-[1.2]">
            Stay connected! Follow us for updates, offers, and more
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item) => (
            <div 
              key={item.id}
              className={`info-card flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-[0px_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1.5 ${item.animation}`}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2"
                  aria-label={item.title}
                >
                  {item.icon}
                </a>
              </div>

              {/* Title */}
              <h6 className="font-sans text-[20px] font-semibold text-[#080C0E] mb-4 leading-[1.4]">
                <a 
                  href={item.link}
                  className="hover:text-[#FF7F27] transition-colors"
                >
                  {item.title}
                </a>
              </h6>

              {/* Content */}
              <p className="font-body text-[16px] text-[#737373] leading-[1.6]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}