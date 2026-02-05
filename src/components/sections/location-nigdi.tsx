import React from 'react';
import Image from 'next/image';

const LocationNigdi = () => {
  // Opening hours data for the 2-column list layout
  const openingHoursSet1 = [
    { day: 'Sunday', time: '8:30 am–11 pm' },
    { day: 'Monday', time: '8:30 am–11 pm' },
    { day: 'Tuesday', time: '8:30 am–11 pm' },
    { day: 'Wednesday', time: '8:30 am–11 pm' },
  ];

  const openingHoursSet2 = [
    { day: 'Thursday', time: '8:30 am–11 pm' },
    { day: 'Friday', time: '8:30 am–11 pm' },
    { day: 'Saturday', time: '8:30 am–11 pm' },
  ];

  const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/2025-04-01-e1743758392648-14.jpg";

  return (
    <section className="bg-[#F7F3E3] py-10 md:py-20 font-sans">
      <div className="container mx-auto max-w-[1140px] px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-in slide-in-from-right duration-700">

          {/* Left Column: Image with specific shadow and radius */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div
                className="overflow-hidden bg-cover bg-center rounded-[15px] shadow-[0px_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1"
                style={{ height: '550px' }}
              >
                <Image
                  src={imageUrl}
                  alt="Futora Cafe Nigdi Interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Restaurant Details */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-[#913429] font-heading font-bold text-[28px] md:text-[36px] leading-[1.2] uppercase tracking-tight">
              FUTORA CAFE ( NIGDI)
            </h2>

            <div className="space-y-3 text-[16px] text-[#333333]">
              <p className="leading-relaxed">
                <span className="font-bold">Address: </span>
                Phoenix Mall Of The Millennium, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057
              </p>

              <p className="leading-relaxed">
                <span className="font-bold">Service Options: </span>
                Has Outdoor Seating · Has Fireplace · Serves Vegan Dishes
              </p>

              <p className="leading-relaxed">
                <a href="tel:+91+91 84466 53644" className="hover:text-[#913429] transition-colors">
                  <span className="font-bold">Phone: </span>
                  0+91 84466 53644
                </a>
              </p>
            </div>

            <div className="pt-2">
              <p className="font-bold text-[#333333] mb-4">Opening Hour&apos;s</p>

              <div className="grid grid-cols-2 gap-x-8 text-[14px] md:text-[15px] leading-[1.8] text-[#666666]">
                {/* Column 1 */}
                <div className="space-y-1">
                  {openingHoursSet1.map((item, idx) => (
                    <div key={idx} className="flex justify-between md:justify-start md:gap-4 border-b border-[#D1CDBB]/30 pb-1">
                      <span className="w-24 font-medium">{item.day}</span>
                      <span className="text-right md:text-left">{item.time}</span>
                    </div>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="space-y-1">
                  {openingHoursSet2.map((item, idx) => (
                    <div key={idx} className="flex justify-between md:justify-start md:gap-4 border-b border-[#D1CDBB]/30 pb-1">
                      <span className="w-24 font-medium">{item.day}</span>
                      <span className="text-right md:text-left">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95 shadow-md"
              >
                Get Directions
                <svg className="w-3 h-3 fill-white rotate-[-45deg]" viewBox="0 0 448 512">
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationNigdi;