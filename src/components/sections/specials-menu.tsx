import React from 'react';
import Image from 'next/image';

const specialsData = [
  {
    id: 1,
    title: "Creamy Cheesy Shezwan Dosa",
    description: "A crispy dosa loaded with creamy cheese and a spicy Schezwan twist – a fusion delight you can't resist!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20231110034151_IMG_7117-scaled-1-1024x1024-11.jpg",
  },
  {
    id: 2,
    title: "Cheese Burst Paneer Tandoori Pizza Dosa",
    description: "A crispy dosa meets the cheesy burst of paneer tandoori pizza a fusion that's pure indulgence!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20240427_110209216_iOS-scaled-r3nqu0syhiw7i8uz8puf-12.jpg",
  },
  {
    id: 3,
    title: "Mysore Masala Dosa",
    description: "A classic delight with a spicy Mysore twist, filled with flavorful masala – tradition on a plate!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20240427_110151762_iOS-scaled-r3nqt20xgnklko9hvst8-13.jpg",
  },
  {
    id: 4,
    title: "Dry Fruit Thick Mango Shake",
    description: "A rich and creamy mango shake loaded with the goodness of almonds – a royal treat in every sip!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20231110024856_IMG_7051-scaled-r3nqyxim6dm44xqaku8-14.jpg",
  },
  {
    id: 5,
    title: "Sambar Rice",
    description: "A hearty bowl of flavorful sambar rice – comfort food at its finest!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20240427_110116818_iOS-scaled-r3nqrdv9b9a8xmovn2t3-15.jpg",
  },
  {
    id: 6,
    title: "Pav Bhaji",
    description: "Mumbai's favorite treat: spiced mashed veggies with butter-toasted pav!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/20231110041200_IMG_7183-scaled-e1743491188165-r3ph-16.jpg",
  },
];

const SpecialsMenu = () => {
  return (
    <section className="bg-[#fdf8e1] py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-10 overflow-hidden">
          <div className="h-[1px] bg-[#d3d3d3] flex-grow max-w-[400px]"></div>
          <div className="flex items-center gap-2">
             <div className="text-[#6e1c0d] opacity-50">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
               </svg>
             </div>
             <h2 className="font-heading text-[50px] leading-[1.2em] text-[#fbb03b] underline decoration-[#fbb03b] underline-offset-8">
               Specials' On Our Menu
             </h2>
             <div className="text-[#6e1c0d] opacity-50">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
               </svg>
             </div>
          </div>
          <div className="h-[1px] bg-[#d3d3d3] flex-grow max-w-[400px]"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {specialsData.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-[25px] overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-2 flex flex-col items-start text-left"
              style={{ boxShadow: '0px 10px 30px rgba(0,0,0,0.08)' }}
            >
              <div className="w-full relative h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="font-body text-[22px] font-semibold text-[#fbb03b] leading-[1.2em]">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.6em] text-[#4a4a4a]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 max-w-[800px] mx-auto">
          <p className="font-body text-[20px] font-medium text-[#4a4a4a] mb-8 leading-[1.6em]">
            These are some of the must-try dishes at our café! <br />
            Explore our menu and indulge in flavors you’ll love.
          </p>
          
          <a
            href="/#menu"
            className="inline-block bg-[#fbb03b] text-white font-body font-medium text-[15px] px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialsMenu;