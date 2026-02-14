import React from 'react';
import Image from 'next/image';

interface DosaItem {
  id: string;
  name: string;
  description?: string;
  subtext?: string;
  isLarge?: boolean;
}

const saDosaSpecials: DosaItem[] = [
  {
    id: 'ccsd',
    name: 'Creamy Cheesy Schezwan Dosa (CCSD)',
    description: 'Spice up dosa craving with creamy cheesy schezwan dosa.',
  },
  {
    id: 'pnd',
    name: 'Paneer Nepolian Dosa (PND)',
    description: 'Buttery dosa with stuffing of paneer, vegetables, cheese and sauces. Our take on veg grilled sandwich',
  },
  {
    id: 'ppccd',
    name: 'Peri Peri Cheese Corn Dosa (PPCCD)',
    description: 'Calling all spices & cheese Lovers to Try Peri Peri Cheese Corn Dosa',
  },
  {
    id: 'pav-bhaji-dosa',
    name: 'Pav Bhaji Dosa',
  },
  {
    id: 'pune-metro',
    name: 'Pune Metro Family Paper Dosa (Approx 6 Feet)',
    subtext: '(Biggest Dosa in Pune)',
    description: 'Introducing Pune’s Biggest Dosa. Can you conquer?',
    isLarge: true,
  },
  {
    id: 'cheese-pav-bhaji',
    name: 'Cheese Pav Bhaji Dosa',
  },
  {
    id: 'veg-cheese-masala',
    name: 'Veg Cheese Masala Dosa',
  },
  {
    id: 'mix-veg-paneer',
    name: 'Mix Veg Paneer Uttapam',
  },
  {
    id: 'nepolian-dosa',
    name: 'Nepolian Dosa',
  },
  {
    id: 'chocolate-dosa',
    name: 'Chocolate Dosa',
  },
];

const SaDosaSpecial: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-0 overflow-hidden relative">
      {/* Container to maintain consistency with global layout */}
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-[32px] md:text-[64px] font-bold text-primary relative inline-block mb-8">
            Sa Dosa Special
            <span className="block w-[120px] h-[4px] bg-primary mx-auto mt-2"></span>
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          
          {/* Left Circular Image - Positioned absolutely for desktop, shifted for layout flow */}
          <div className="absolute left-[-10%] top-[10%] hidden lg:block">
            <div className="relative w-[320px] h-[320px] rounded-full p-[10px] border-2 border-primary before:content-[''] before:absolute before:-inset-2 before:border-2 before:border-secondary before:rounded-full">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20231110040822_IMG_7175-scaled-removebg-preview-11.png"
                  alt="Special Dosa Item"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Circular Image */}
          <div className="absolute right-[-10%] bottom-[5%] hidden lg:block">
            <div className="relative w-[280px] h-[280px] rounded-full p-[10px] border-2 border-[#E11D48] before:content-[''] before:absolute before:-inset-2 before:border-2 before:border-[#FACC15] before:rounded-full">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Updated_05_10_24_page-0008-removebg-prev-18.png"
                  alt="Dosa Garnish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Menu List */}
          <div className="w-full max-w-2xl text-center z-10 space-y-8">
            {saDosaSpecials.map((item) => (
              <div key={item.id} className="flex flex-col items-center transition-transform duration-300 hover:scale-102">
                <h3 className={`font-sans font-semibold text-foreground ${item.isLarge ? 'text-2xl md:text-[36px] leading-tight' : 'text-xl md:text-[32px] leading-snug'}`}>
                  {item.name}
                </h3>
                {item.subtext && (
                  <span className="font-sans font-semibold text-foreground text-lg md:text-[28px] mt-1">
                    {item.subtext}
                  </span>
                )}
                {item.description && (
                  <p className="font-sans text-[#666666] text-sm md:text-base mt-2 max-w-[80%] mx-auto">
                    {item.description}
                  </p>
                )}

                {/* 6 Foot Dosa Illustration Insertion */}
                {item.id === 'pune-metro' && (
                  <div className="my-10 w-full max-w-[800px] flex justify-center">
                    <div className="relative w-full aspect-[4/1]">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Updated_05_10_24_page-0008-removebg-prev-18.png"
                        alt="Pune's Biggest Dosa"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Images (Shown only on small screens below the list) */}
          <div className="mt-12 lg:hidden flex gap-8 justify-center">
             <div className="relative w-32 h-32 rounded-full border-2 border-primary p-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20231110040822_IMG_7175-scaled-removebg-preview-11.png"
                  alt="Special Dosa"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
             </div>
             <div className="relative w-32 h-32 rounded-full border-2 border-secondary p-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Updated_05_10_24_page-0008-removebg-prev-18.png"
                  alt="Dosa Special"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-no-repeat bg-cover z-20 pointer-events-none transform translate-y-1" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23F6F1DC'/%3E%3C/svg%3E")` }}>
      </div>
    </section>
  );
};

export default SaDosaSpecial;