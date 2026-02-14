import React from 'react';
import Image from 'next/image';

/**
 * JuhuChowpatty Component
 * 
 * Clones the "Juhu Chowpatty™" section highlighting Pav Bhaji options 
 * with a stylized Mumbai skyline vector graphic at the bottom and a 
 * representative dish image.
 */
const JuhuChowpatty: React.FC = () => {
  const pavBhajiOptions = [
    "Pav Bhaji",
    "Cheese Pav Bhaji",
    "Paneer Pav Bhaji",
    "Paneer Cheese Pav Bhaji"
  ];

  // Asset from the provided list
  const pavBhajiImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Updated_05_10_24_page-0008-removebg-prev-18.png";

  return (
    <section className="relative overflow-hidden bg-[#FDF5E1] py-[80px] md:py-[100px]">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        {/* Section Heading */}
        <div className="text-center mb-[40px]">
          <h2 className="font-heading text-[45px] md:text-[55px] text-[#BF2026] relative inline-block mb-[15px] after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[120px] after:height-[3px] after:bg-[#BF2026]">
            Juhu Chowpatty™
          </h2>
          <p className="font-body text-[14px] md:text-[15px] text-[#2B2118] max-w-[800px] mx-auto mt-[20px] leading-[1.6]">
            Pav bhaji is a Mumbai treat with mashed veggies, pan-fried and served with with pav jodi toasted in butter.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[60px] relative z-10">
          {/* Dish Image with styling */}
          <div className="relative group">
            <div className="relative w-[280px] h-[220px] md:w-[350px] md:h-[280px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src={pavBhajiImage}
                alt="Pav Bhaji"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Minimal Decorative Elements found in original */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l-2 border-b-2 border-[#F39200]/30 rounded-bl-xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-r-2 border-t-2 border-[#BF2026]/30 rounded-tr-xl"></div>
          </div>

          {/* Menu List */}
          <div className="text-center md:text-left">
            <ul className="space-y-[15px] md:space-y-[20px]">
              {pavBhajiOptions.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-sans font-semibold text-[22px] md:text-[24px] text-black hover:text-[#BF2026] transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mumbai Skyline Vector Graphic at Bottom */}
        <div className="mt-[60px] md:mt-[40px] w-full flex justify-center opacity-40">
          <svg 
            width="100%" 
            height="120" 
            viewBox="0 0 1000 120" 
            preserveAspectRatio="xMidYMax meet"
            className="fill-[#2B2118]"
          >
            {/* Simplified Mumbai Landmarks Representation (Gateway, Buildings, Clouds) */}
            <path d="M100,110 L120,110 L120,105 L130,105 L130,110 L150,110 L150,90 L160,90 L160,110 L180,110 L180,80 L200,80 L200,110 L220,110 L220,95 L230,95 L230,110 L250,110" />
            <circle cx="125" cy="100" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* High-rise representation */}
            <rect x="380" y="70" width="40" height="40" rx="2" />
            <rect x="385" y="75" width="5" height="5" fill="#FDF5E1" />
            <rect x="395" y="75" width="5" height="5" fill="#FDF5E1" />
            <rect x="405" y="75" width="5" height="5" fill="#FDF5E1" />
            
            <rect x="620" y="85" width="80" height="25" rx="1" />
            <rect x="625" y="90" width="10" height="5" fill="#FDF5E1" />
            <rect x="640" y="90" width="10" height="5" fill="#FDF5E1" />
            <rect x="655" y="90" width="10" height="5" fill="#FDF5E1" />
            <rect x="670" y="90" width="10" height="5" fill="#FDF5E1" />
            
            {/* Gateway of India silhouette */}
            <path d="M780,110 L780,95 L795,95 L795,90 L855,90 L855,95 L870,95 L870,110 M810,110 L810,98 Q825,92 840,98 L840,110" />
            
            {/* Birds/Clouds */}
            <path d="M150,40 Q155,35 160,40 Q165,35 170,40" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M180,45 Q185,40 190,45 Q195,40 200,45" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Sun/Moon */}
            <circle cx="850" cy="50" r="15" fill="#F39200" fillOpacity="0.6" />
            
            {/* Base line */}
            <line x1="0" y1="110" x2="1000" y2="110" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
      
      {/* Decorative Wave Brush Shape Divider Bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,224,576,224C672,224,768,181,864,181.3C960,181,1056,224,1152,224C1248,224,1344,181,1392,160L1440,139L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(180deg)'
        }}
      ></div>
    </section>
  );
};

export default JuhuChowpatty;