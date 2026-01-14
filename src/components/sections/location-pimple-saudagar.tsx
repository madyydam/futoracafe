import React from 'react';
import Image from 'next/image';
import { MousePointer2, LayoutGrid } from 'lucide-react';

/**
 * Pimple Saudagar Restaurant Section
 * Cloned with pixel-perfect accuracy based on provided designs and computed styles.
 */
export default function LocationPimpleSaudagar() {
  const openingHours = [
    { day: 'Sunday', time: '8:30 am–11 pm', dayRight: 'Thursday', timeRight: '8:30 am–11 pm' },
    { day: 'Monday', time: '8:30 am–11 pm', dayRight: 'Friday', timeRight: '8:30 am–11 pm' },
    { day: 'Tuesday', time: '8:30 am–11 pm', dayRight: 'Saturday', timeRight: '8:30 am–11 pm' },
    { day: 'Wednesday', time: '8:30 am–11 pm', dayRight: '', timeRight: '' },
  ];

  return (
    <section className="bg-[#F7F3E3] py-[60px] md:py-[80px]">
      <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column: Image with specific shadow and radius */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="overflow-hidden rounded-[15px] shadow-[0px_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out hover:-translate-y-1.5">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/IMG_4132-scaled-12.jpg"
                  alt="Futora Cafe Pimple Saudagar Night View"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover max-h-[600px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Restaurant Details */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-5">
            <div>
              <h2 className="font-heading text-[28px] md:text-[36px] text-[#913429] font-bold leading-[1.2] uppercase mb-4">
                FUTORA CAFE (PIMPLE SAUDAGAR)
              </h2>
              
              <p className="text-[#333333] mb-4 text-[16px]">
                <strong className="font-semibold">Address:</strong> BLOCK A, RUNAL&apos;S DEEPMALA, Deepmala Society, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027
              </p>
              
              <p className="text-[#333333] mb-4 text-[16px]">
                <strong className="font-semibold">Service Options:</strong> Reservations Required · Has All You Can Eat · Serves Happy-Hour Food
              </p>
              
              <p className="mb-6">
                <a 
                  href="tel:+919823444534" 
                  className="text-[#333333] text-[16px] hover:text-[#913429] transition-colors font-semibold"
                >
                  Phone: 098234 44534
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-[18px] text-[#333333] mb-4">
                Opening Hour&apos;s
              </h4>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-full md:max-w-[500px]">
                {/* Left Side Hours */}
                <div className="space-y-2">
                  {openingHours.map((item, idx) => (
                    <div key={`left-${idx}`} className="flex justify-between items-center text-[14px] md:text-[15px] border-b border-[#D1CDBB]/30 pb-1">
                      <span className="text-[#666666] font-medium">{item.day}</span>
                      <span className="text-[#333333]">{item.time}</span>
                    </div>
                  ))}
                </div>
                
                {/* Right Side Hours */}
                <div className="space-y-2">
                  {openingHours.filter(i => i.dayRight).map((item, idx) => (
                    <div key={`right-${idx}`} className="flex justify-between items-center text-[14px] md:text-[15px] border-b border-[#D1CDBB]/30 pb-1">
                      <span className="text-[#666666] font-medium">{item.dayRight}</span>
                      <span className="text-[#333333]">{item.timeRight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#1A1A1A] text-white font-sans font-semibold rounded-full hover:bg-neutral-800 transition-all duration-300 text-[14px] group"
              >
                Get Directions
                <MousePointer2 className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              
              <a 
                href="#reserve" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white border border-[#1A1A1A] text-[#1A1A1A] font-sans font-semibold rounded-full hover:bg-neutral-50 transition-all duration-300 text-[14px] group"
              >
                Reserve a Table
                <LayoutGrid className="ml-2 w-4 h-4 transition-transform group-hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}