import React from 'react';
import Image from 'next/image';

const LocationWakad = () => {
  const openingHours = [
    { day: 'Sunday', time: '11 am – 11 pm' },
    { day: 'Monday', time: '11 am – 11 pm' },
    { day: 'Tuesday', time: '11 am – 11 pm' },
    { day: 'Wednesday', time: '11 am – 11 pm' },
  ];

  const openingHoursColumn2 = [
    { day: 'Thursday', time: '11 am – 11 pm' },
    { day: 'Friday', time: '11 am – 11 pm' },
    { day: 'Saturday', time: '11 am – 11 pm' },
  ];

  const imageAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Screenshot_16-12-2024_213456_-13.jpeg";

  return (
    <section className="bg-brand-cream py-10 md:py-20 font-sans">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left Column: Image Card */}
          <div className="w-full lg:w-[45%] flex-shrink-0 animate-in slide-in-from-left duration-700">
            <div className="relative group overflow-hidden rounded-[15px] shadow-card">
              <Image
                src={imageAsset}
                alt="FUTORA CAFE (WAKAD) Interior"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Restaurant Details */}
          <div className="w-full lg:w-[55%] flex flex-col space-y-5 animate-in slide-in-from-right duration-700">
            <h2 className="text-brand-rust font-heading text-[32px] md:text-[36px] font-bold leading-tight">
              FUTORA CAFE (WAKAD)
            </h2>

            <div className="space-y-4 text-foreground text-[16px] leading-relaxed">
              <p>
                <span className="font-semibold">Address:</span> Phoenix Mall Of The Millennium, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057
              </p>
              
              <p>
                <span className="font-semibold">Located In:</span> Phoenix Mall Of The Millennium
              </p>

              <div className="flex items-center gap-2">
                <span className="font-semibold">Order:</span>
                <a 
                  href="https://www.swiggy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-rust hover:underline transition-all"
                >
                  Swiggy.com
                </a>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <h4 className="text-foreground font-semibold text-[18px]">Opening Hour's</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                {/* Column 1 */}
                <div className="space-y-1">
                  {openingHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-border/50 lg:border-none">
                      <span className="text-[#333333] font-medium">{item.day}</span>
                      <span className="text-[#666666] lg:ml-4">{item.time}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-1">
                  {openingHoursColumn2.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-border/50 lg:border-none">
                      <span className="text-[#333333] font-medium">{item.day}</span>
                      <span className="text-[#666666] lg:ml-4">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-3 rounded-pill text-[14px] font-semibold uppercase tracking-wider shadow-md"
              >
                <span>Get Directions</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationWakad;