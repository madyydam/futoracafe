import React from 'react';
import Image from 'next/image';

const WelcomeMenu = () => {
  const specialDishes = [
    {
      id: 1,
      title: "Artisanal Cappuccino",
      description: "Rich espresso topped with a smooth layer of velvety foam, crafted by our expert baristas.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Fresh Avocado Toast",
      description: "Creamy smashed avocado on sourdough, topped with chili flakes and a drizzle of extra virgin olive oil.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Signature Club Sandwich",
      description: "Layers of toasted bread, fresh greens, grilled chicken, and our secret sauce.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Golden Croissant",
      description: "Flaky, buttery, and baked fresh every morning to perfection.",
      image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Berry Bliss Bowl",
      description: "A refreshing blend of açai, seasonal berries, granola, and a touch of honey.",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Iced Caramel Macchiato",
      description: "Perfectly balanced sweetness with rich espresso and chilled milk over ice.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Yellow Transition Section */}
      <div className="bg-[#FFB331] h-[150px] relative w-full">
        {/* Floating Menu Card Assets */}
        <div className="absolute left-[5%] top-[-20%] z-10 hidden md:block animate-bounce-slow">
           <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Final-1-e1743600227811-210x300-10.png"
            alt="Menu Decoration"
            width={210}
            height={300}
            className="w-[120px] lg:w-[210px] h-auto drop-shadow-xl"
           />
        </div>
        <div className="absolute right-[5%] top-[-20%] z-10 hidden md:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
           <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Final-1-e1743600227811-210x300-10.png"
            alt="Menu Decoration"
            width={210}
            height={300}
            className="w-[120px] lg:w-[210px] h-auto scale-x-[-1] drop-shadow-xl"
           />
        </div>

        {/* Wave Brush Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[80px] z-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full fill-[#F7F1E1]">
            <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#F7F1E1] pt-12 pb-24 relative px-4 text-center">
        {/* Decorative Character Illustrations */}
        <div className="absolute left-4 top-20 hidden lg:block animate-pulse">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_2149484273-removebg-preview-e1743600374818.png" 
            alt="Welcome Character" 
            width={180} 
            height={200}
            className="w-[150px] h-auto"
          />
        </div>
        <div className="absolute right-4 top-20 hidden lg:block animate-pulse">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_2149484273-removebg-preview-e1743600374818.png" 
            alt="Welcome Character" 
            width={180} 
            height={200}
            className="w-[150px] h-auto scale-x-[-1]"
          />
        </div>

        <div className="container mx-auto max-w-[1140px] relative z-10">
            <h1 className="font-aladin text-[48px] md:text-[80px] lg:text-[120px] text-[#633200] leading-tight mb-4 animate-in fade-in slide-in-from-bottom duration-1000">
              Welcome To The Common Cafe
            </h1>

          
          <p className="font-roboto uppercase tracking-widest text-[#4a4a4a] text-[12px] md:text-[14px] mb-12">
            serving smile with Every plate, flavors You&apos;ll Celebrate!
          </p>

            <h2 className="font-montez text-[32px] md:text-[48px] lg:text-[60px] text-[#633200] leading-tight mb-16 px-4">
              Spreading cheer with every bite,<br className="hidden md:block" /> Brewed fresh and served just right!
            </h2>


          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex-1 h-[1px] bg-[#633200]/20 hidden md:block"></div>
            <div className="text-[18px] text-[#633200]">
              <span className="inline-block p-1 border border-[#633200]/20 rounded-full"></span>
            </div>
            <h3 className="font-aladin text-[40px] md:text-[65px] text-[#633200] underline decoration-[#FFB331] decoration-4 underline-offset-8">
              Specials&apos; On Our Menu
            </h3>
            <div className="text-[18px] text-[#633200]">
              <span className="inline-block p-1 border border-[#633200]/20 rounded-full"></span>
            </div>
            <div className="flex-1 h-[1px] bg-[#633200]/20 hidden md:block"></div>
          </div>

          {/* Grid Layout for Dishes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specialDishes.map((dish) => (
              <div 
                key={dish.id} 
                className="bg-white rounded-[15px] overflow-hidden shadow-card transition-transform duration-300 hover:scale-[1.03] flex flex-col items-center group p-4 border border-[#e5e5e5]"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 food-border shadow-md">
                  <Image 
                    src={dish.image} 
                    alt={dish.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center px-4 pb-4">
                  <h5 className="font-akshar text-[22px] md:text-[28px] font-semibold text-[#A2231A] mb-3 leading-tight">
                    {dish.title}
                  </h5>
                  <p className="font-poppins text-[14px] leading-relaxed text-[#4a4a4a]">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="max-w-[800px] mx-auto mb-10">
            <p className="font-akshar text-[18px] md:text-[24px] font-medium text-[#633200] mb-8 italic">
              These are some of the must-try dishes at our café! Explore our menu and indulge in flavors you’ll love.
            </p>
            <a 
              href="/#menu" 
              className="inline-block bg-[#FFB331] text-white px-8 py-3 rounded-[5px] font-akshar font-bold text-[14px] uppercase tracking-wider shadow-lg hover:bg-[#e6a12b] transition-colors duration-300"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMenu;