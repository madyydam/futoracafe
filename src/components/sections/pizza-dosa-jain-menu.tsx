import React from 'react';
import Image from 'next/image';

const PizzaDosaJainMenu = () => {
  return (
    <div className="flex flex-col bg-[#F6F1DC]">
      {/* Pizza Dosa Menu Section */}
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-category text-[#8F221B] font-heading text-[64px] font-bold mb-4 relative inline-block after:content-[''] after:block after:w-[120px] after:h-[4px] after:bg-[#8F221B] after:mx-auto after:mt-2">
            Pizza Dosa Menu
          </h2>
          <p className="mt-8 text-sm md:text-base text-[#B38E5D] font-sans max-w-2xl mx-auto leading-relaxed">
            A pizza made on Uttapam as a crust. Topped with pizza sauce, paneer, vegetables, mozzarella and explosion of cheese in the middle.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 text-center">
          <div className="space-y-2">
            <h3 className="item-name text-black text-[32px] font-semibold font-sans">
              Cheese Burst Pizza Dosa
            </h3>
          </div>

          <div className="space-y-2">
            <h3 className="item-name text-black text-[32px] font-semibold font-sans">
              Cheese Burst Paneer Pizza Dosa
            </h3>
          </div>

          <div className="space-y-2">
            <h3 className="item-name text-black text-[32px] font-semibold font-sans">
              Cheese Burst Tandoori Pizza Dosa
            </h3>
          </div>

          <div className="space-y-2">
            <h3 className="item-name text-black text-[32px] font-semibold font-sans">
              Cheese Burst Paneer Tandoori Pizza Dosa
            </h3>
            <p className="item-description text-[#666666] text-sm md:text-base font-sans mt-2">
              Dosa gets a fiery makeover introducing Paneer Tandoori Pizza Dosa
            </p>
          </div>
        </div>
      </section>

      {/* Jain Menu Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Brush Stroke Asset */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[500px] pointer-events-none z-0 opacity-80 lg:opacity-100">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Element-e1742618605176-15.png"
            alt="Orange paint brush element"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-left mb-12">
            <h2 className="section-category text-left text-[#8F221B] font-heading text-[64px] font-bold mb-10 relative inline-block after:content-[''] after:block after:w-[120px] after:h-[4px] after:bg-[#8F221B] after:ml-0 after:mt-2">
              Jain Menu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-screen-xl">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Ernakulam Podi Idli
                </h3>
              </div>

              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Rava Dosa (butter/ghee)
                </h3>
                <p className="item-description text-[#666666] text-base font-sans line-height-[1.6]">
                  Crispy jain rava dosa, served with sambar and coconut chutney.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Ghee Roast Podi Utappam
                </h3>
              </div>

              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Paneer Nepolian Dosa (PND)
                </h3>
                <p className="item-description text-[#666666] text-base font-sans line-height-[1.6]">
                  Buttery dosa with stuffing of paneer, jain friendly vegetables. cheese and sauces. Our take on veg grilled sandwich.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Cheese Burst Pizza Dosa
                </h3>
              </div>

              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Cheese Burst Paneer Pizza Dosa
                </h3>
              </div>

              <div className="space-y-2">
                <h3 className="item-name text-black text-[32px] font-semibold font-sans">
                  Chocolate Dosa
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Spacer with Wave Brush if needed elsewhere, but following the two sections specifically */}
      <div className="w-full h-20 bg-transparent"></div>
    </div>
  );
};

export default PizzaDosaJainMenu;