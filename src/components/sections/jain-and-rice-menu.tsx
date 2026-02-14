import React from 'react';
import Image from 'next/image';

const JainAndRiceMenu = () => {
  // Common styles from computed_styles and globals.css
  const sectionHeadingStyle = "font-['Lobster',_cursive] text-[48px] text-[#8B2323] relative inline-block mb-10 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[4px] after:bg-[#8B2323]";
  const menuItemTitleStyle = "font-['Questrial',_sans-serif] text-[28px] font-normal leading-tight text-black";
  const menuDescriptionStyle = "font-['Poppins',_sans-serif] text-[16px] font-light text-[#6B6B6B] mt-1 max-w-[500px]";

  const jainMenuItems = [
    {
      title: "Ernakulam Podi Idli",
      description: ""
    },
    {
      title: "Rava Dosa (butter/ghee)",
      description: "Crispy jain rava dosa, served with sambar and coconut chutney."
    },
    {
      title: "Ghee Roast Podi Utappam",
      description: ""
    },
    {
      title: "Paneer Nepolian Dosa (PND)",
      description: "Buttery dosa with stuffing of paneer, jain friendly vegetables, cheese and sauces. Our take on veg grilled sandwich."
    },
    {
      title: "Cheese Burst Pizza Dosa",
      description: ""
    },
    {
      title: "Cheese Burst Paneer Pizza Dosa",
      description: ""
    },
    {
      title: "Chocolate Dosa",
      description: ""
    }
  ];

  const riceMenuItems = [
    {
      title: "Ghee Podi Rice",
      description: "Made with flavourful rice sauté in Ghee tadka and Podi masala, topped with peanuts"
    },
    {
      title: "Curd Rice",
      description: "Made with flavourful rice, Curd, Ghee, herbs & tempering spices, topped with roasted chana."
    },
    {
      title: "Sambar Rice",
      description: "Made with flavourful rice and sambar cooked together in ghee tadka."
    },
    {
      title: "Lemon Rice",
      description: "Zesty lemon rice with mustard seeds, curry leaves, and roasted peanuts, bursting with flavor."
    }
  ];

  const splashAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Element-e1742618605176-15.png";

  return (
    <div className="bg-[#F7F1E1] w-full overflow-hidden">
      {/* Jain Menu Section */}
      <section className="relative py-20 min-h-screen">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <h2 className={sectionHeadingStyle}>Jain Menu</h2>
            
            <div className="space-y-8 mt-12 w-full max-w-[650px]">
              {jainMenuItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className={menuItemTitleStyle}>{item.title}</h3>
                  {item.description && (
                    <p className={menuDescriptionStyle}>{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Orange Splash Background */}
        <div className="absolute right-[-10%] top-[10%] w-[60%] h-full pointer-events-none md:block hidden">
          <Image 
            src={splashAsset}
            alt="decorative splash"
            width={800}
            height={800}
            className="object-contain opacity-90 rotate-[-15deg]"
          />
        </div>
      </section>

      {/* Rice Menu Section */}
      <section className="relative py-20 bg-[#F7F1E1]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h2 className={sectionHeadingStyle}>Rice Menu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-16 w-full max-w-[1000px]">
              {riceMenuItems.map((item, index) => (
                <div key={index} className="flex flex-col text-center md:text-left">
                  <h3 className={menuItemTitleStyle}>{item.title}</h3>
                  <p className={`${menuDescriptionStyle} mx-auto md:mx-0`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mumbai Skyline Illustration Footer Divider */}
      <div className="w-full relative h-[250px] mt-10">
        <Image 
          src="https://sadosacafe.com/wp-content/uploads/2025/03/istockphoto-1153282272-612x612-removebg-preview.png"
          alt="Mumbai Skyline"
          fill
          className="object-contain object-bottom opacity-80"
          priority
        />
      </div>
      
      {/* Bottom Wavy Shape Divider (as seen in high level design) */}
      <div 
        className="wavy-divider" 
        style={{ transform: 'rotate(180deg)', marginBottom: '-1px' }} 
      />
    </div>
  );
};

export default JainAndRiceMenu;