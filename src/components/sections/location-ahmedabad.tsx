import React from 'react';
import Image from 'next/image';

/**
 * LocationAhmedabad Component
 * Clones the "SA DOSA (Thaltej, Ahmedabad)" section with pixel-perfect accuracy.
 * Theme: light
 */
const LocationAhmedabad = () => {
  // Opening hours data for the Ahmedabad branch
  const openingHours = [
    { day: 'Sunday', time: '8:30 am–11:30 pm' },
    { day: 'Monday', time: '8:30 am–11:00 pm' },
    { day: 'Tuesday', time: '8:30 am–11:00 pm' },
    { day: 'Wednesday', time: '8:30 am–11:00 pm' },
    { day: 'Thursday', time: '8:30 am–11:30 pm' },
    { day: 'Friday', time: '8:30 am–11:00 pm' },
    { day: 'Saturday', time: '8:30 am–11:00 pm' },
  ];

  return (
    <section className="bg-[#F5F1E1] py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[500px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-soft transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/IMG_4098-scaled-15.jpg"
                alt="SA DOSA (Thaltej, Ahmedabad)"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6 animate-in fade-in slide-in-from-right duration-700">
              <h2 className="font-traditional text-[#3C2415] text-[36px] md:text-[45px] leading-tight mb-4">
                SA DOSA (Thaltej, Ahmedabad)
              </h2>
              <div className="h-[2px] w-[80px] bg-[#FF6B35] mb-6"></div>
            </div>

            <div className="space-y-4 text-[#3C2415] font-body text-[16px]">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#FF6B35] uppercase tracking-wider text-[14px]">Address</span>
                <p>Thaltej, Ahmedabad, Gujarat 380054, India</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[#FF6B35] uppercase tracking-wider text-[14px]">Service Options</span>
                <p>Dine-in · Takeaway · Delivery</p>
              </div>

              <div className="mt-8">
                <h3 className="font-title text-[#FF6B35] text-[24px] mb-4">Opening Hour’s</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {openingHours.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-2 border-b border-[#3C2415]/10"
                    >
                      <span className="font-medium text-[#3C2415]">{item.day}</span>
                      <span className="text-[#3C2415]/80">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#FF6B35] text-white px-[30px] py-[15px] rounded-[5px] font-sans font-semibold uppercase text-[14px] tracking-widest transition-all hover:bg-[#e85a28] shadow-md flex items-center gap-2"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience the Essence Section Integration */}
      <div className="container mx-auto max-w-[1200px] px-6 mt-[100px] text-center">
        <div className="flex flex-col items-center">
          <h2 className="font-display text-[#3C2415] text-[40px] md:text-[50px] leading-tight mb-6">
            Experience the Essence of Sa Dosa Cafe
          </h2>
          <h3 className="font-title text-[#FF6B35] text-[24px] md:text-[32px] mb-6 max-w-[800px]">
            Authentic flavors, warm hospitality, and a café experience like no other.
          </h3>
          <p className="font-body text-[#3C2415] text-[16px] leading-[1.8] max-w-[900px] opacity-90">
            From the aroma of freshly brewed chai to the taste of traditional delights, our cafés bring you the richness of Indian culture. 
            Each outlet is designed to create a cozy and welcoming atmosphere, perfect for gatherings, work, or a moment of relaxation. 
            Find your nearest café and indulge in the flavors of India. Come visit us today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationAhmedabad;