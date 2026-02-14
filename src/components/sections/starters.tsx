import React from 'react';
import Image from 'next/image';

const Starters = () => {
  const startersList = [
    { name: "Cheese Nachos" },
    { name: "French Fries - Salted" },
    { name: "Batata Vada Shots - (6pcs)" },
    { name: "Hara Bhara Kabab (6pcs)" },
    { name: "Peri Peri French Fries - Cheese Dip" },
    { name: "Butter Garlic Nylon Dosa" },
  ];

  return (
    <section className="relative bg-[#FDF5E1] py-16 px-4 overflow-hidden">
      {/* Wave Top Divider */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[40px] fill-background"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/30"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-[1140px]">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-[55px] text-[#BF2026] relative inline-block mb-10 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:height-[3px] after:bg-[#BF2026]">
            Starters
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left Side: Circular Image with Green Border */}
          <div className="relative group">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] rounded-full border-4 border-[#006837] overflow-hidden p-1 transition-transform duration-300 group-hover:translate-x-1">
               <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Upda0013-e1734334606683-16.png"
                  alt="Ernakulam Podi Idli"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Visual accent circles typically seen in their design */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#006837] rounded-full hidden md:block opacity-50"></div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#006837] rounded-full hidden md:block opacity-50"></div>
          </div>

          {/* Middle: Text Content */}
          <div className="flex-1 text-center">
            <div className="mb-6">
              <h3 className="font-sans text-[22px] font-semibold text-black mb-2">
                Ernakulam Podi Idli
              </h3>
              <p className="font-body text-[15px] text-[#666666] leading-relaxed max-w-[450px] mx-auto">
                Spice up dosa craving Button Idli tossed in ghee and our homemade podi masala. Served with coconut chutney and sambar.
              </p>
            </div>

            <ul className="space-y-4">
              {startersList.map((item, index) => (
                <li key={index} className="font-sans text-[22px] font-semibold text-black">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Circular Image with Green/Yellow Border */}
          <div className="relative group">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] rounded-full border-4 border-[#006837] overflow-hidden p-1 transition-transform duration-300 group-hover:-translate-x-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-05_10_24_page-0014-e1742622061410-17.png"
                  alt="Appetizer Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Visual accent circles */}
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 bg-[#006837] rounded-full hidden md:block opacity-50"></div>
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 bg-[#006837] rounded-full hidden md:block opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Wave Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[40px] fill-background"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/30"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Starters;