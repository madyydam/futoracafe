import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

/**
 * FranchiseHero component
 * 
 * A pixel-perfect clone of the Sa Dosa Cafe franchise hero section.
 * Features:
 * - Strategic orange gradient background
 * - Animated typography using RocknRoll One font
 * - Floating decorative assets (Traditional Indian drummers, Menu card)
 * - Interactive explore button
 */

const FranchiseHero: React.FC = () => {
  return (
    <section 
      className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F5AF31 0%, #FFC864 100%)',
      }}
    >
      {/* Container for main content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 pt-20">
        
        {/* Main Heading */}
        <div className="mb-6">
          <h1 
            className="text-[60px] md:text-[90px] text-[#8E231F] font-display bounce-in"
            style={{ 
              fontFamily: 'var(--font-display)',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Our Restaurant&apos;s
          </h1>
        </div>

        {/* Sub-heading content */}
        <div className="max-w-[800px] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300 fill-mode-both">
          <p 
            className="text-[18px] md:text-[24px] font-semibold text-[#5A3A22] leading-[1.4]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Serve Smiles with a Sa Dosa Food Franchise!<br />
            Explore Our Restaurants – Quality, Consistency, and Flavor!
          </p>
        </div>

        {/* Explore Button */}
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500 fill-mode-both">
          <a 
            href="#expolre"
            className="group btn-pill bg-black text-white hover:bg-black/90 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
          >
            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Explore</span>
          </a>
        </div>
      </div>

      {/* Decorative Traditional Indian Musicians Graphic (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[450px] lg:w-[550px] z-20 animate-in slide-in-from-left-10 duration-1000 ease-out fill-mode-both">
        <Image 
          src="https://sadosacafe.com/wp-content/uploads/2025/03/Screenshot_23-3-2025_20222_-removebg-preview.png"
          alt="Traditional Indian Musicians"
          width={550}
          height={350}
          className="object-contain"
          priority
        />
      </div>

      {/* Floating Menu Card Graphic (Right Middle) */}
      <div className="absolute right-[-20px] top-[45%] translate-y-[-50%] w-[200px] md:w-[350px] lg:w-[400px] z-10 animate-in slide-in-from-right-10 duration-1000 ease-out fill-mode-both">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Menu-Card-Updated-05_10_24_page-0014-e174273720035-3.png"
          alt="Sa Dosa Menu Card"
          width={400}
          height={600}
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* Soft Wave Transition at the bottom (optional visual polish based on design system) */}
      <div 
        className="absolute bottom-[-1px] left-0 w-full h-[150px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #F7F3E3 0%, transparent 100%)'
        }}
      />
      
      {/* Animation Styles */}
      <style jsx global>{`
        .bounce-in {
          animation: bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default FranchiseHero;