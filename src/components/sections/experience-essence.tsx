import React from 'react';
import Image from 'next/image';

const ExperienceEssence = () => {
  return (
    <section className="bg-[#F5F1E1] text-[#3C2415]">
      {/* Experience the Essence Section */}
      <div className="py-[80px] lg:py-[100px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-['Aladin'] text-[45px] lg:text-[55px] font-normal leading-tight mb-6">
              Experience the Essence of Sa Dosa Cafe
            </h2>
            <h3 className="font-['Poor_Story'] text-[24px] lg:text-[32px] font-bold text-[#FF6B35] mb-8 max-w-3xl mx-auto leading-tight">
              Authentic flavors, warm hospitality, and a café experience like no other.
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="font-['Poppins'] text-[16px] lg:text-[18px] leading-[1.8] opacity-90">
                From the aroma of freshly brewed chai to the taste of traditional delights, our cafés bring you the richness of Indian culture. Each outlet is designed to create a cozy and welcoming atmosphere, perfect for gatherings, work, or a moment of relaxation.
              </p>
              <p className="font-['Poppins'] text-[16px] lg:text-[18px] leading-[1.8] opacity-90">
                Find your nearest café and indulge in the flavors of India. Come visit us today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Transition */}
      <div className="w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] fill-[#FDBE44]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35c63.47,33.41,136.21,40.83,205,34.84,33.11-2.88,62.89-10.43,116.39-25.75Z"></path>
        </svg>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-[80px] lg:py-[100px]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Image placeholder with logo decoration */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4">
                {/* Stylized Circle Frame mimicking the design language */}
                <div className="absolute inset-0 border-[6px] border-[#FF6B35] rounded-full opacity-10"></div>
                <div className="absolute inset-8 border-[2px] border-[#006633] rounded-full border-dashed opacity-20 animate-spin-slow"></div>
                
                <div className="relative z-10 w-[280px] h-[280px]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOS_CAFE-removebg-preview-e1743673847897-8.png"
                    alt="Sa Dosa Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center">
              <span className="font-['Montserrat'] text-[14px] font-bold text-[#FF6B35] tracking-[3px] uppercase mb-4 block">
                OUR STORY
              </span>
              <h2 className="font-['RocknRoll_One'] text-[32px] lg:text-[42px] leading-[1.2] mb-8 text-[#3C2415]">
                Mauris Imperdiet Orci Dapibus Commodo Morbi in Faucibus.
              </h2>
              <div className="space-y-6 text-[#3C2415] opacity-80 font-['Poppins']">
                <p className="text-[16px] leading-[1.7]">
                  Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.
                </p>
                <p className="text-[16px] leading-[1.7]">
                  Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.
                </p>
              </div>
            </div>
          </div>

          {/* Cooking Class Description */}
          <div className="mt-[80px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-[#F5F1E1] pt-[80px]">
            <div>
              <h2 className="font-['RocknRoll_One'] text-[28px] lg:text-[36px] leading-[1.3] mb-6 text-[#3C2415]">
                There are a variety of places where you can experience a cooking class
              </h2>
            </div>
            <div className="space-y-6 text-[#3C2415] opacity-80 font-['Poppins']">
              <p className="text-[16px] leading-[1.7]">
                Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum.
              </p>
              <p className="text-[16px] leading-[1.7]">
                Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Accent - Green Curve Bottom */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] fill-[#006633] opacity-5"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-32.82C939.75,34,995.35,10,1055,8.15c58.22-1.81,113.8,12.67,145,27.83V0H0Z"></path>
        </svg>
      </div>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ExperienceEssence;