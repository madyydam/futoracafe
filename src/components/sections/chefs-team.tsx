import React from 'react';
import Image from 'next/image';

const chefs = [
  {
    name: "Nick Paterson",
    role: "Chef",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/icons/chief-1_2x-1.jpg",
    borderColor: "border-[#FF6B35]", // Primary Orange
  },
  {
    name: "Jacob Guerrero",
    role: "Chef",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/icons/chief-2_2x-2.jpg",
    borderColor: "border-[#006633]", // Secondary Green
  },
  {
    name: "Melissa Prey",
    role: "Chef",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/icons/chief-3_2x-3.jpg",
    borderColor: "border-[#FDBE44]", // Accent Yellow
  }
];

const ChefsTeam = () => {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F5F1E1]">
      <div className="container max-w-[1200px] px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[50px] max-w-[800px] mx-auto">
          <h2 className="font-traditional text-[45px] leading-[1.2] text-[#3C2415] mb-4">
            Our Qualified Chefs
          </h2>
          <p className="font-body text-[16px] leading-[1.6] text-[#3C2415] opacity-90">
            Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {chefs.map((chef, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              {/* Image with Decorative Border */}
              <div className={`relative w-[280px] h-[280px] mb-6 rounded-full overflow-hidden border-[4px] shadow-soft ${chef.borderColor} transition-transform duration-500 group-hover:scale-105`}>
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>

              {/* Chef Info */}
              <div className="text-center">
                <h6 className="font-title text-[24px] font-bold text-[#FF6B35] mb-1">
                  {chef.name}
                </h6>
                <p className="font-body text-[16px] font-medium text-[#3C2415] uppercase tracking-wider opacity-80">
                  {chef.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note/Signature if needed based on content, but following instructions specifically for the grid */}
        <div className="mt-12 text-center hidden">
          <h6 className="font-title text-[18px] text-[#3C2415]">By Dorothy Valdez</h6>
        </div>
      </div>
    </section>
  );
};

export default ChefsTeam;