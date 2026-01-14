import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Left Column: Illustration */}
          <div 
            className="w-full md:w-1/2 flex justify-center md:justify-start items-center animate-in fade-in duration-1000"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-auto">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Element02-e1743600655592-6.png"
                alt="Tropical boat scene illustration"
                width={600}
                height={450}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right Column: Typography */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <div className="animate-in slide-in-from-right duration-700 delay-100">
              <h1 
                className="mb-6 text-[#080C0E]"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  lineHeight: '1.1',
                  fontWeight: '400',
                }}
              >
                Get in Touch<br />with Us
              </h1>
            </div>

            <div className="animate-in slide-in-from-right duration-700 delay-300">
              <h5 
                className="text-[#080C0E] max-w-[450px] mx-auto md:mx-0"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '1.6',
                }}
              >
                Whether it&apos;s a query, collaboration, or just a friendly hello, feel free to reach out. We&apos;d love to hear from you!
              </h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;