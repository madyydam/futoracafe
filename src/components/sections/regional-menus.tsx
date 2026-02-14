import React from 'react';
import Image from 'next/image';

const NamasteAnnaSection = () => {
  const menuItemsLeft = [
    { title: 'Idli Chutney Sambar' },
    { title: 'Medu Vada' },
    { title: 'Idli Medu Vada Mix' },
    { title: 'Sada Dosa' },
    { title: 'Masala Dosa' },
    { title: 'Cut Dosa' },
  ];

  const menuItemsRight = [
    { title: 'Onion Tomato Uttappam' },
    { title: 'Mysore Masala Dosa' },
    { title: 'Butter Garlic Mysore Masala Dosa' },
    { title: 'Onion Rava Dosa' },
    { title: 'Onion Rava Masala Dosa' },
    { title: 'Ghee Roast Podi Utappam' },
  ];

  return (
    <section className="bg-[#F7F1E1] py-20 overflow-hidden">
      {/* Wave Brush Top Divider */}
      <div className="w-full h-16 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%20d%3D%22M0%2C160L48%2C176C96%2C192%2C192%2C224%2C288%2C213.3C384%2C203%2C480%2C149%2C576%2C149.3C672%2C149%2C768%2C203%2C864%2C202.7C960%2C203%2C1056%2C149%2C1152%2C128C1248%2C107%2C1344%2C117%2C1392%2C122.7L1440%2C128L1440%2C0L1392%2C0C1344%2C0%2C1248%2C0%2C1152%2C0C1056%2C0%2C960%2C0%2C864%2C0C768%2C0%2C672%2C0%2C576%2C0C480%2C0%2C384%2C0%2C288%2C0C192%2C0%2C96%2C0%2C48%2C0L0%2C0Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-no-repeat bg-cover -mt-20 mb-10 rotate-180"></div>

      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-title text-[48px] font-heading text-primary inline-block relative px-4">
            Namaste Anna™
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Menu Items */}
          <div className="flex-1 w-full space-y-6 text-center md:text-right">
            {menuItemsLeft.map((item, index) => (
              <div key={index} className="group">
                <h3 className="menu-item-title text-[28px] font-menu text-black leading-tight cursor-default transition-transform group-hover:scale-105">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Central Circular Display */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Top Image Circle */}
            <div className="relative w-[300px] h-[300px] food-circle border-[10px] border-white ring-[4px] ring-forest-green shadow-xl z-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Upda0013-e1734334606683-16.png"
                alt="Namaste Anna Specialties"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Connecting Dots (Decorative) */}
            <div className="w-[2px] h-12 bg-forest-green/30 border-dashed border-l-2 border-forest-green hidden md:block"></div>

            {/* Bottom Image Circle */}
            <div className="relative w-[300px] h-[300px] food-circle border-[10px] border-white ring-[4px] ring-forest-green shadow-xl z-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-05_10_24_page-0014-e1742622061410-17.png"
                alt="Dosa Special"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Menu Items */}
          <div className="flex-1 w-full space-y-6 text-center md:text-left">
            {menuItemsRight.map((item, index) => (
              <div key={index} className="group">
                <h3 className="menu-item-title text-[28px] font-menu text-black leading-tight cursor-default transition-transform group-hover:scale-105">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const JuhuChowpattySection = () => {
  const menuItems = [
    { title: 'Pav Bhaji' },
    { title: 'Cheese Pav Bhaji' },
    { title: 'Paneer Pav Bhaji' },
    { title: 'Paneer Cheese Pav Bhaji' },
  ];

  return (
    <div className="relative">
      <section className="bg-[#F7F1E1] pt-16 pb-0 overflow-visible">
        <div className="container mx-auto px-6 max-w-[1200px]">
          {/* Section Heading */}
          <div className="text-center mb-6">
            <h2 className="section-title text-[48px] font-heading text-primary inline-block relative px-4 mb-2">
              Juhu Chowpatty™
            </h2>
            <p className="font-body text-[16px] text-primary/80 max-w-2xl mx-auto italic">
              Pav bhaji is a Mumbai treat with mashed veggies, pan-fried and served with with pav jodi toasted in butter.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
            {/* Left Image - Pav Bhaji Display */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[280px] food-circle border-[10px] border-white ring-[4px] ring-saffron shadow-xl animate-rotateInDownLeft">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Upda0013-e1734334606683-16.png" // Using available asset
                  alt="Pav Bhaji"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle Menu List */}
            <div className="w-full md:w-1/3 text-center space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="group">
                  <h3 className="menu-item-title text-[28px] font-menu text-black leading-tight cursor-default transition-transform group-hover:scale-110">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Right Spacer for Layout balancing */}
            <div className="hidden md:block md:w-1/3"></div>
          </div>
        </div>

        {/* Mumbai Skyline Illustration Background */}
        <div className="relative w-full h-[250px] mt-12 opacity-80 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <rect width="100%" height="100%" fill="transparent" />
            {/* Simple skyline representation using rects and paths to match the illustration feel */}
            <g fill="#A6603E" fillOpacity="0.15">
              <path d="M0,320 L0,280 L40,280 L40,300 L60,300 L60,250 L100,250 L100,320 Z" />
              <path d="M120,320 L120,200 L180,200 L180,320 Z" />
              <path d="M200,320 L200,240 L240,240 L240,220 L280,220 L280,320 Z" />
              <path d="M300,320 L300,180 L360,180 L360,320 Z" />
              <path d="M400,320 L400,100 L460,100 L460,320 Z" />
              <path d="M500,320 L500,220 L550,150 L600,220 L600,320 Z" />
              <path d="M640,320 L640,140 L700,140 L700,320 Z" />
              <path d="M750,320 L750,80 L820,80 L820,320 Z" />
              <path d="M850,320 L850,200 L900,200 L900,320 Z" />
              <path d="M940,320 L940,120 L1000,120 L1000,320 Z" />
              <path d="M1040,320 L1040,180 L1100,180 L1100,320 Z" />
              <path d="M1140,320 L1140,240 L1200,240 L1200,320 Z" />
              <path d="M1240,320 L1240,100 L1300,100 L1300,320 Z" />
              <path d="M1340,320 L1340,220 L1440,220 L1440,320 Z" />
            </g>
          </svg>
          {/* Sun Element */}
          <div className="absolute top-10 right-[15%] w-16 h-16 bg-saffron/20 rounded-full blur-md"></div>
          <div className="absolute top-12 right-[15.5%] w-12 h-12 bg-saffron/30 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default function RegionalMenus() {
  return (
    <div className="w-full">
      <NamasteAnnaSection />
      <JuhuChowpattySection />
    </div>
  );
}