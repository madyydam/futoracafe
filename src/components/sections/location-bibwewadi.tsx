import React from 'react';
import Image from 'next/image';
import { MousePointer2, LayoutGrid } from 'lucide-react';

const LocationBibwewadi = () => {
  return (
    <section className="bg-[#F7F3E3] py-[60px] px-4 md:px-0">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row gap-[30px] items-start">
        {/* Left Column: Vertical Interior Image */}
        <div className="w-full md:w-[385px] shrink-0">
          <div className="relative rounded-[15px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/RESTAURANT01-10.jpg"
              alt="Futora Cafe Bibwewadi Interior"
              width={385}
              height={580}
              className="w-full h-auto object-cover aspect-[385/580]"
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-heading text-[28px] md:text-[32px] font-bold text-[#913429] leading-tight m-0">
            FUTORA CAFE (BIBWEWADI)
          </h2>

          <div className="space-y-3">
            <p className="text-[16px] leading-[1.6] text-[#333333] m-0">
              <span className="font-semibold">Address:</span> Soba Saanj Apartment, Sitaram Aabaji Bibwe Path, opp. to bhagali hospital, Shree Sant Eknath Nagar, Padmavati Nagar, Pune, Maharashtra 411037
            </p>

            <p className="text-[16px] leading-[1.6] text-[#333333] m-0">
              <span className="font-semibold">Service Options:</span> Has Outdoor Seating · Serves Vegan Dishes · Has Kids&apos; Menu
            </p>

            <p className="text-[16px] leading-[1.6] text-[#333333] m-0">
              <a href="tel:+919823444534" className="font-semibold hover:text-[#913429] transition-colors">
                Phone: 098234 44534
              </a>
            </p>

            <div className="pt-2">
              <p className="font-semibold text-[16px] mb-4">Opening Hour&apos;s</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 max-w-[500px]">
                {/* Sunday to Wednesday */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Sunday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Monday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Tuesday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Wednesday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                </div>

                {/* Thursday to Saturday */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Thursday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Friday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-[#666666]">Saturday</span>
                    <span className="text-[#333333]">8:30 am–11 pm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full font-sans font-semibold text-[14px] transition-colors hover:bg-neutral-800"
              >
                Get Directions
                <MousePointer2 className="ml-2 w-4 h-4 fill-white" />
              </a>
              <a
                href="#"
                className="inline-flex items-center bg-white border border-[#D1CDBB] text-[#333333] px-6 py-2.5 rounded-full font-sans font-semibold text-[14px] transition-all hover:bg-neutral-50"
              >
                Reserve a Table
                <LayoutGrid className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBibwewadi;