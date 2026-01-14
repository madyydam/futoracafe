import React from 'react';
import Image from 'next/image';

/**
 * Hero Section: "City's Biggggest Dosa"
 * Themes: Vibrant saffron background, floating food assets, bold brown typography.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[100px] pb-0 lg:pt-[120px]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-[-1] bg-[#FFB331]" />

      <div className="container relative mx-auto px-4 text-center">
        {/* Top Floating Asset: Illustration */}
        <div className="mb-[-20px] flex justify-center animate-bounceInDown delay-500">
           {/* Closest match for the top illustration from assets */}
           <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_2149484273-removebg-preview-e1743600374818-4.png"
            alt="South Indian Traditional Illustration"
            width={240}
            height={210}
            className="w-auto h-[160px] lg:h-[210px] object-contain"
          />
        </div>

        {/* Headline */}
        <div className="relative z-10 mx-auto max-w-4xl animate-bounceInDown delay-500">
          <h2 className="font-aladin text-[60px] leading-[1.1] text-brand-brown lg:text-[120px] lg:leading-[1em]">
            City&apos;s Biggggest Dosa
          </h2>
        </div>

        {/* Main 6ft Dosa Asset */}
        <div className="relative mt-4 lg:mt-8 flex justify-center items-center group animate-bounce delay-500">
          <div className="relative transform-gpu transition-transform duration-700 hover:scale-105">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu_Card_Final-removebg-e1743474049285-1024x163-3.png"
              alt="6ft Dosa on Banana Leaf"
              width={1024}
              height={163}
              priority
              className="lg:max-w-none md:max-w-[80vw] sm:max-w-full drop-shadow-2xl"
            />
            {/* Tag Overlay */}
            <div className="absolute -top-8 right-0 lg:-right-4 animate-rubberBand delay-1000">
              <span className="inline-block bg-white text-brand-brown font-akshar font-semibold px-4 py-1 rounded-full shadow-lg text-sm lg:text-base border-2 border-brand-brown/10">
                6ft approx.
              </span>
            </div>
          </div>
        </div>

        {/* Floating Background Assets */}
        
        {/* Floating Leaf Left */}
        <div className="absolute top-[20%] left-[-2%] lg:left-[5%] animate-rotateInUpRight delay-1200 opacity-90 pointer-events-none">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/leaf-1-1-5.webp"
            alt="Decorative Leaf"
            width={182}
            height={133}
            className="w-[100px] lg:w-[182px] rotate-[-15deg] transition-all hover:rotate-0 duration-500"
          />
        </div>

        {/* Floating Leaf Right */}
        <div className="absolute top-[15%] right-[-2%] lg:right-[8%] animate-rotateInUpLeft delay-1200 opacity-90 pointer-events-none hidden sm:block">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/leaf-1-1-5.webp"
            alt="Decorative Leaf"
            width={182}
            height={133}
            className="w-[80px] lg:w-[150px] scale-x-[-1] rotate-[20deg]"
          />
        </div>

        {/* Pepper / Spice Element */}
        <div className="absolute bottom-[10%] right-[10%] animate-zoomIn delay-1300 pointer-events-none hidden lg:block">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Element03-e1743602081882-300x147-6.png"
            alt="Spice Illustration"
            width={200}
            height={98}
            className="w-[150px] object-contain opacity-80"
          />
        </div>

        {/* Tomato Element */}
        <div className="absolute top-[60%] left-[2%] lg:left-[10%] animate-slideInDown pointer-events-none">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/tomato_slider-7.webp"
            alt="Fresh Tomato"
            width={127}
            height={132}
            className="w-[60px] lg:w-[100px] drop-shadow-md"
          />
        </div>

        {/* Coconut Element (Bottom Right Area) */}
        <div className="absolute bottom-5 right-[5%] animate-zoomIn delay-1400 pointer-events-none">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_2148157341-e1743602191550-150x150-8.png"
            alt="Coconut Half"
            width={150}
            height={150}
            className="w-[80px] lg:w-[120px] drop-shadow-lg"
          />
        </div>

        {/* Decorative Points / Stars */}
        <div className="absolute top-[40%] left-[15%] animate-zoomIn delay-1300 opacity-50 pointer-events-none hidden lg:block">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/points_2-300x85-1-9.webp"
            alt="Decorative Accents"
            width={150}
            height={42}
          />
        </div>

        <div className="absolute top-[45%] right-[15%] animate-zoomIn delay-1300 opacity-50 pointer-events-none hidden lg:block">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/points_2-300x85-1-9.webp"
            alt="Decorative Accents"
            width={150}
            height={42}
          />
        </div>

        {/* Cultural Illustration Bottom Left */}
        <div className="absolute bottom-0 left-0 lg:left-[2%] pointer-events-none">
           <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/rb_2149484273-removebg-preview-e1743600374818-4.png"
            alt="Heritage Art"
            width={200}
            height={180}
            className="w-[120px] lg:w-[180px] opacity-80"
          />
        </div>
      </div>

      {/* Wave Brush Transition to next section */}
      <div className="relative mt-[-1px] w-full h-[100px] lg:h-[150px] z-20">
        <svg 
         viewBox="0 0 1440 320" 
         className="absolute bottom-0 w-full h-full fill-[#F7F1E1] preserve-3d"
         preserveAspectRatio="none"
        >
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Spacing spacer widget as per HTML structure */}
      <div className="h-0 lg:h-[20px]" />
    </section>
  );
}