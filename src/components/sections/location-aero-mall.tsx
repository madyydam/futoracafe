import React from 'react';
import Image from 'next/image';

interface OpeningHour {
  day: string;
  time: string;
}

const AeroMallLocation: React.FC = () => {
  const openingHoursColumn1: OpeningHour[] = [
    { day: 'Sunday', time: '8:30 am–11 pm' },
    { day: 'Monday', time: '8:30 am–11 pm' },
    { day: 'Tuesday', time: '8:30 am–11 pm' },
    { day: 'Wednesday', time: '8:30 am–11 pm' },
  ];

  const openingHoursColumn2: OpeningHour[] = [
    { day: 'Thursday', time: '8:30 am–11 pm' },
    { day: 'Friday', time: '8:30 am–11 pm' },
    { day: 'Saturday', time: '8:30 am–11 pm' },
  ];

  const mallImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Screenshot_18-12-2024_21023_www_google_com_-11.jpeg";

  return (
    <section className="bg-[#F7F3E3] py-[80px] md:py-[100px] flex justify-center items-center">
      <div className="container max-w-[1140px] px-6">
        <div className="flex flex-col md:flex-row gap-[30px] items-start">
          {/* Left Side: Storefront Image */}
          <div className="w-full md:w-1/2 lg:w-[45%] flex justify-center animate-in slide-in-from-left duration-700">
            <div className="relative w-full aspect-[3/4] max-w-[400px] restaurant-card-image overflow-hidden group shadow-card rounded-[15px]">
              <Image
                src={mallImage}
                alt="Futora Cafe Aero Mall"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col pt-4 animate-in slide-in-from-right duration-700">
            <h2 className="text-[#913429] font-heading text-[28px] md:text-[36px] font-bold mb-6 leading-tight uppercase">
              FUTORA CAFE ( AERO MALL)
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-[#333333] font-sans text-[15px] md:text-[16px] leading-relaxed">
                <span className="font-bold">Address: </span>
                Survey No 225, Pune Airport, Aeromall, Unit. K 12, Lohegaon, Pune, Maharashtra 411047
              </p>

              <p className="text-[#333333] font-sans text-[15px] md:text-[16px] leading-relaxed">
                <span className="font-bold">Service Options:</span> Serves vegan dishes · Has Wi-Fi
              </p>

              <p className="text-[#333333] font-sans text-[15px] md:text-[16px] leading-relaxed">
                <a href="tel:+918446544544" className="hover:text-brand-rust transition-colors underline-offset-4">
                  <span className="font-bold">Phone:</span> 084465 44544
                </a>
              </p>
            </div>

            <div className="opening-hours-section">
              <h4 className="text-[#333333] font-sans font-semibold text-[18px] mb-4">
                Opening Hour’s
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                <div className="space-y-1">
                  {openingHoursColumn1.map((hour) => (
                    <div key={hour.day} className="flex justify-between text-[#666666] font-sans text-[14px] py-1 border-b border-[#D1CDBB]/30">
                      <span>{hour.day}</span>
                      <span>{hour.time}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {openingHoursColumn2.map((hour) => (
                    <div key={hour.day} className="flex justify-between text-[#666666] font-sans text-[14px] py-1 border-b border-[#D1CDBB]/30">
                      <span>{hour.day}</span>
                      <span>{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Futora+Cafe+Aero+Mall+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#1A1A1A] text-white text-[14px] px-6 py-2.5 flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-md group"
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 duration-200">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AeroMallLocation;