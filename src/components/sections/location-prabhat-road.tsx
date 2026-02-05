import React from 'react';
import Image from 'next/image';
import { MousePointer2, LayoutGrid } from 'lucide-react';

const LocationPrabhatRoad = () => {
  return (
    <section className="font-sans py-10 md:py-20 flex justify-center bg-[#F7F3E3]">
      <div className="container max-w-[1140px] px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column: Image */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[15px] shadow-[0px_20px_40px_rgba(0,0,0,0.3)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/2024-08-15-9.jpg"
                alt="FUTORA CAFE (PRABHAT ROAD)"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full md:w-[60%] flex flex-col space-y-4 text-[#333333]">
            {/* Title */}
            <h2 className="font-heading text-[#913429] text-[28px] md:text-[36px] font-bold leading-tight uppercase">
              FUTORA CAFE (PRABHAT ROAD)
            </h2>

            {/* Address */}
            <div className="text-[14px] md:text-[16px] leading-relaxed">
              <span className="font-bold">Address: </span>
              Prabhat road, Lane no 8, Karve Rd, near garware college, Kachare Colony, Erandwane, Pune, Maharashtra 411004
            </div>

            {/* Service Options */}
            <div className="text-[14px] md:text-[16px] leading-relaxed">
              <span className="font-bold">Service options: </span>
              Has all you can eat · Has outdoor seating · Serves vegan dishes
            </div>

            {/* Phone */}
            <div className="text-[14px] md:text-[16px]">
              <a
                href="tel:+918446544544"
                className="font-bold hover:text-[#913429] transition-colors"
              >
                Phone: 0+91 84466 53644
              </a>
            </div>

            {/* Opening Hours Section */}
            <div className="pt-2">
              <h4 className="font-sans font-bold text-[16px] md:text-[18px] mb-4">
                Opening Hour’s
              </h4>

              {/* Opening Hours Table-like Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-[14px] md:text-[15px] opacity-90">
                {/* Column 1 */}
                <div className="flex justify-between space-x-4">
                  <div className="flex flex-col space-y-2">
                    <span>Sunday</span>
                    <span>Monday</span>
                    <span>Tuesday</span>
                    <span>Wednesday</span>
                  </div>
                  <div className="flex flex-col space-y-2 text-right sm:text-left">
                    <span>8:30 am–11:30 pm</span>
                    <span>8:30 am–11 pm</span>
                    <span>8:30 am–11 pm</span>
                    <span>8:30 am–11 pm</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex justify-between space-x-4">
                  <div className="flex flex-col space-y-2">
                    <span>Thursday</span>
                    <span>Friday</span>
                    <span>Saturday</span>
                  </div>
                  <div className="flex flex-col space-y-2 text-right sm:text-left">
                    <span>8:30 am–11:30 pm</span>
                    <span>8:30 am–11 pm</span>
                    <span>8:30 am–11 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-black text-white hover:bg-[#333333] px-6 py-2.5 flex items-center gap-2 text-[14px]"
              >
                <span>Get Directions</span>
                <MousePointer2 className="w-4 h-4 rotate-90" />
              </a>
              <button className="btn-pill bg-white border border-[#D1CDBB] text-black hover:bg-neutral-50 px-6 py-2.5 flex items-center gap-2 text-[14px]">
                <span>Reserve a Table</span>
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPrabhatRoad;