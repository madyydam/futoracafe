import React from 'react';
import Image from 'next/image';

/**
 * JuhuChowpattyRice component
 * Clones the "Juhu Chowpatty™" and "Rice Menu" sections.
 * Features a Mumbai city skyline illustration at the bottom and a Pav Bhaji dish image on the left.
 */
const JuhuChowpattyRice: React.FC = () => {
  return (
    <div className="bg-[#F6F1DC] font-sans selection:bg-primary selection:text-white">
      {/* Juhu Chowpatty™ Section */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          {/* Section Heading */}
          <div className="mb-12 inline-block">
            <h2 className="section-category text-[#8F221B] font-heading text-[48px] md:text-[64px] font-bold mb-4 relative">
              Juhu Chowpatty™
            </h2>
            <div className="w-[120px] h-[4px] bg-[#8F221B] mx-auto -mt-4"></div>
          </div>

          {/* Description */}
          <p className="text-[#666666] text-lg max-w-3xl mx-auto mb-12 font-medium">
            Pav bhaji is a Mumbai treat with mashed veggies, pan-fried and served with with pav jodi toasted in butter.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16">
            {/* Pav Bhaji Image Left Side */}
            <div className="relative w-full max-w-[400px]">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Final-removebg-e1743474049285-3.png"
                  alt="Pav Bhaji"
                  width={400}
                  height={300}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Menu Items List */}
            <div className="text-left md:text-left space-y-6">
              {[
                "Pav Bhaji",
                "Cheese Pav Bhaji",
                "Paneer Pav Bhaji",
                "Paneer Cheese Pav Bhaji"
              ].map((item, idx) => (
                <h3 
                  key={idx} 
                  className="item-name text-black font-semibold text-2xl md:text-3xl hover:text-[#8F221B] transition-colors cursor-default"
                >
                  {item}
                </h3>
              ))}
            </div>
          </div>
        </div>

        {/* Mumbai City Skyline Illustration */}
        <div className="w-full mt-8 opacity-80 select-none pointer-events-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-05_10_24_page-0014-e1742622061410-17.png"
            alt="Mumbai Skyline"
            width={1920}
            height={200}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Rice Menu Section */}
      <section className="py-20 bg-[#F6F1DC]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          {/* Section Heading */}
          <div className="mb-16 inline-block">
            <h2 className="section-category text-[#8F221B] font-heading text-[48px] md:text-[64px] font-bold mb-4 relative">
              Rice Menu
            </h2>
            <div className="w-[120px] h-[4px] bg-[#8F221B] mx-auto -mt-4"></div>
          </div>

          <div className="space-y-12">
            {/* Ghee Podi Rice */}
            <div className="group text-center">
              <h3 className="item-name text-black font-semibold text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                Ghee Podi Rice
              </h3>
              <p className="item-description text-[#666666] text-base leading-relaxed max-w-2xl mx-auto italic">
                Made with flavourful rice sauté in Ghee tadka and Podi masala, topped with peanuts
              </p>
            </div>

            {/* Curd Rice */}
            <div className="group text-center">
              <h3 className="item-name text-black font-semibold text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                Curd Rice
              </h3>
              <p className="item-description text-[#666666] text-base leading-relaxed max-w-2xl mx-auto italic">
                Made with flavourful rice, Curd, Ghee, herbs & tempering spices, topped with roasted chana.
              </p>
            </div>

            {/* Sambar Rice */}
            <div className="group text-center">
              <h3 className="item-name text-black font-semibold text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                Sambar Rice
              </h3>
              <p className="item-description text-[#666666] text-base leading-relaxed max-w-2xl mx-auto italic">
                Made with flavourful rice and sambar cooked together in ghee tadka.
              </p>
            </div>

            {/* Lemon Rice */}
            <div className="group text-center">
              <h3 className="item-name text-black font-semibold text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                Lemon Rice
              </h3>
              <p className="item-description text-[#666666] text-base leading-relaxed max-w-2xl mx-auto italic">
                Zesty lemon rice with mustard seeds, curry leaves, and roasted peanuts, bursting with flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .section-category::after {
          content: '';
          display: block;
          width: 0px !important; /* Hide the default after from globals to use the manual one for pixel perfect alignment */
          height: 0px;
        }
      `}</style>
    </div>
  );
};

export default JuhuChowpattyRice;