import React from 'react';

/**
 * FranchiseNewsletter Component
 * 
 * Clones the "Newsletter Updates" section with pixel-perfect accuracy.
 * Features:
 * - Headline and sub-headline with specific typography.
 * - Responsive email input and subscribe button.
 * - Integration with the site's earth-toned color palette.
 */
const FranchiseNewsletter: React.FC = () => {
  return (
    <section 
      className="elementor-section elementor-section-boxed py-[80px] md:py-[100px] bg-background"
      style={{
        backgroundColor: '#F5F1E1', // Ensuring exact background from high-level design
      }}
    >
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Section Heading */}
          <div className="elementor-widget-heading">
            <h2 
              className="h2 text-[#3C2415] mb-2"
              style={{
                fontFamily: 'var(--font-traditional)', // Aladin
                fontSize: '45px',
                fontWeight: 400,
                lineHeight: '1.2',
              }}
            >
              Newsletter Updates
            </h2>
          </div>

          {/* Sub-heading */}
          <div className="elementor-widget-heading max-w-[600px]">
            <h4 
              className="text-[#3C2415] opacity-90"
              style={{
                fontFamily: 'var(--font-body)', // Poppins
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              Enter your email address below to subscribe to our tasty newsletter
            </h4>
          </div>

          {/* Newsletter Form */}
          <div className="w-full max-w-[500px] mt-8">
            <form 
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full h-[55px] px-6 rounded-[30px] border-2 border-[#e5e5e5] focus:border-[#FF6B35] focus:outline-none bg-white text-[#3C2415]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                  }}
                />
              </div>
              
              <button
                type="submit"
                className="whitespace-nowrap h-[55px] px-10 rounded-[30px] bg-[#FF6B35] text-white font-semibold transition-all duration-300 hover:bg-[#e05a2b] shadow-soft"
                style={{
                  fontFamily: 'var(--font-sans)', // Montserrat
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderRadius: '30px'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Optional decorative element - matching the "Experience the Essence" style if needed, 
          but keeping it strictly to the design request for the newsletter section */}
      <style jsx global>{`
        .shadow-soft {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
};

export default FranchiseNewsletter;