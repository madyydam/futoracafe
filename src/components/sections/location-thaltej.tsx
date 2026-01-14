import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';

const LocationThaltej = () => {
  return (
    <section className="bg-[#F7F3E3] py-[80px] md:py-[100px] font-sans">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[60px] items-start">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 lg:w-[45%]">
            <div className="relative group">
              <div className="rounded-[15px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/IMG_4098-scaled-15.jpg"
                  alt="FUTORA Thaltej Avenue"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover min-h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-1/2 lg:w-[55%] flex flex-col">
            <h2 className="text-[#913429] font-heading text-[28px] md:text-[36px] font-bold leading-tight mb-4 uppercase tracking-tight">
              FUTORA (Thaltej, Ahmedabad)
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-[#333333] text-[16px] leading-[1.6]">
                <strong className="font-semibold">Address:</strong> Unit No FH 7, 5th Floor, Palladium, Sarkhej – Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-[#333333] font-sans font-semibold text-[18px] mb-4">
                Opening Hour’s
              </h4>
              
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-12">
                {/* Hours Table Left */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Sunday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Monday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Tuesday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Wednesday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                </div>

                {/* Hours Table Right */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Thursday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Friday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#D1CDBB] pb-1">
                    <span className="text-[14px] text-[#333333] font-medium">Saturday</span>
                    <span className="text-[14px] text-[#666666]">11 am – 11 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-[50px] text-[14px] font-semibold hover:bg-[#333333] transition-colors duration-200 shadow-md"
              >
                Get Directions
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white border border-[#D1CDBB] text-[#1A1A1A] px-6 py-3 rounded-[50px] text-[14px] font-semibold hover:bg-neutral-50 transition-colors duration-200 shadow-sm"
              >
                Reserve a Table
                <LayoutGrid className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationThaltej;