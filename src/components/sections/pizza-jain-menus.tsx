import React from 'react';
import Image from 'next/image';

/**
 * PizzaJainMenus Component
 * 
 * Clones the "Pizza Dosa Menu" and "Jain Menu" sections.
 * Features the signature orange paint-stroke graphic for the Jain section background.
 */

const PizzaJainMenus: React.FC = () => {
  // Styles based on computed_styles and globals.css_file
  const sectionHeaderStyle = "font-['Roboto_Slab'] text-[48px] font-bold text-[#8E2121] underline underline-offset-8 text-center mb-8";
  const itemTitleStyle = "font-['Poppins'] text-[22px] font-semibold text-black text-center mb-1";
  const itemDescStyle = "font-['Questrial'] text-[14px] text-[#666666] max-width-[600px] text-center mb-6 leading-relaxed px-4";
  const categoryDescStyle = "font-['Questrial'] text-[14px] text-[#DAA520] max-width-[600px] text-center mb-10 leading-relaxed font-medium px-4";
  const sectionContainerStyle = "w-full max-w-[1200px] mx-auto py-20 px-6";

  const pizzaDosaItems = [
    { title: "Cheese Burst Pizza Dosa" },
    { title: "Cheese Burst Paneer Pizza Dosa" },
    { title: "Cheese Burst Tandoori Pizza Dosa" },
    { 
      title: "Cheese Burst Paneer Tandoori Pizza Dosa",
      desc: "Dosa gets a fiery makeover introducing Paneer Tandoori Pizza Dosa"
    },
  ];

  const jainMenuItems = [
    { title: "Ernakulam Podi Idli" },
    { 
      title: "Rava Dosa (butter/ghee)", 
      desc: "Crispy jain rava dosa, served with sambar and coconut chutney." 
    },
    { title: "Ghee Roast Podi Utappam" },
    { 
      title: "Paneer Nepolian Dosa (PND)", 
      desc: "Buttery dosa with stuffing of paneer, jain friendly vegetables. cheese and sauces. Our take on veg grilled sandwich." 
    },
    { title: "Cheese Burst Pizza Dosa" },
    { title: "Cheese Burst Paneer Pizza Dosa" },
    { title: "Chocolate Dosa" },
  ];

  return (
    <div className="bg-[#FDF5E1] w-full">
      {/* Pizza Dosa Menu Section */}
      <section className={sectionContainerStyle}>
        <div className="flex flex-col items-center">
          <h2 className={sectionHeaderStyle}>Pizza Dosa Menu</h2>
          <p className={categoryDescStyle}>
            A pizza made on Uttapam as a crust. Topped with pizza sauce, paneer, vegetables, mozzarella and explosion of cheese in the middle.
          </p>
          
          <div className="space-y-4 w-full flex flex-col items-center">
            {pizzaDosaItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <h3 className={itemTitleStyle}>{item.title}</h3>
                {item.desc && <p className={itemDescStyle}>{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jain Menu Section */}
      <section className="relative overflow-hidden py-24">
        {/* The Orange Paint-Stroke Background Asset */}
        <div 
          className="absolute right-[-5%] top-[50%] translate-y-[-50%] w-[500px] h-[550px] opacity-90 pointer-events-none z-0 hidden lg:block"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/re-e1743845545465-22.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className={`${sectionContainerStyle} relative z-10`}>
          <div className="flex flex-col items-start lg:items-start text-left lg:w-2/3">
            <h2 className={`${sectionHeaderStyle} text-left lg:ml-0 underline-offset-[12px]`}>
              Jain Menu
            </h2>
            
            <div className="space-y-8 mt-10">
              {jainMenuItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <h3 className="font-['Poppins'] text-[26px] font-semibold text-black mb-1">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="font-['Questrial'] text-[15px] text-[#666666] max-w-[450px] leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Background (Centered behind text) */}
        <div 
          className="absolute inset-0 opacity-15 lg:hidden z-0"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/re-e1743845545465-22.png')`,
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </section>
    </div>
  );
};

export default PizzaJainMenus;