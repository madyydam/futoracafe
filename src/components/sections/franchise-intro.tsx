import React from 'react';

/**
 * FranchiseIntro Component
 * 
 * This component clones the introductory text section of the Sa Dosa Cafe franchise page.
 * It features a centered headline "Bringing Great Food Near You" with a subtext
 * and specifically requested bounce-in animations as per the Elementor structure.
 * 
 * Theme: Light
 * Design: High accuracy to original layout, colors, and typography.
 */
const FranchiseIntro: React.FC = () => {
  return (
    <section 
      className="elementor-element elementor-element-1e944ba3 e-con-full e-flex e-con e-parent bg-[#F7F3E3] py-[40px] px-0"
      id="intro-banner"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-[1140px]">
        {/* Desktop Version of Heading */}
        <div 
          className="elementor-element elementor-element-45c9adfd elementor-hidden-mobile elementor-widget elementor-widget-heading animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-12" 
          style={{ animationFillMode: 'both' }}
        >
          <div className="elementor-widget-container mb-4">
            <h2 
              className="elementor-heading-title elementor-size-default font-display text-[45px] leading-[1.2em] text-[#8E231F] m-0"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Bringing Great Food Near You
            </h2>
          </div>
        </div>

        {/* Mobile Version of Heading (visible on mobile only) */}
        <div className="elementor-element elementor-element-56c249a md:hidden flex flex-col items-center mb-4">
          <h2 
            className="elementor-heading-title elementor-size-default font-display text-[32px] leading-[1.1em] text-[#8E231F] m-0"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Bringing Great<br />Food Near You
          </h2>
        </div>

        {/* Subtext Description */}
        <div 
          className="elementor-element elementor-element-2e17529 elementor-widget elementor-widget-heading animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-8 delay-150"
          style={{ animationFillMode: 'both' }}
        >
          <div className="elementor-widget-container">
            <h4 
              className="elementor-heading-title elementor-size-default font-body text-[16px] md:text-[20px] font-semibold leading-[1.4em] text-[#5A3A22] max-w-[800px] mx-auto px-4"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
            >
              our restaurants, each offering a unique dining experience with signature flavors
            </h4>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Replicating the specific bounceInUp animation from Elementor */
        .animated.bounceInUp {
          animation-name: bounceInUp;
          animation-duration: 1.2s;
          animation-fill-mode: both;
        }

        @keyframes bounceInUp {
          from,
          60%,
          75%,
          90%,
          to {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          from {
            opacity: 0;
            transform: translate3d(0, 3000px, 0) scaleY(5);
          }

          60% {
            opacity: 1;
            transform: translate3d(0, -20px, 0) scaleY(0.9);
          }

          75% {
            transform: translate3d(0, 10px, 0) scaleY(0.95);
          }

          90% {
            transform: translate3d(0, -5px, 0) scaleY(0.985);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default FranchiseIntro;