import React from 'react';
import Image from 'next/image';

/**
 * ContactFormArea Component
 * 
 * Clones the two-column section with a yellow background (#FFBD4B).
 * Left side: Branding text, Marathi quote, Order CTA, and QR Code.
 * Right side: Clean white contact form container with soft shadow.
 */
export default function ContactFormArea() {
  return (
    <section className="relative w-full bg-[#FFBD4B] pt-20 pb-20 overflow-hidden">
      {/* Wave Divider at the top - Transitions from white (previous section) to yellow */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="relative block w-[100%] h-[60px] fill-white"
        >
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Branding & Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Marathi Logo/Branding Image */}
            <div className="mb-6 animate-bounceIn">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Sa-dosa-marathi-01-e1743672639903-300x85-3.png"
                alt="Sa Dosa Marathi Logo"
                width={300}
                height={85}
                className="h-auto max-w-[280px]"
              />
            </div>

            {/* Marathi Hospitality Quote */}
            <h5 className="font-sans text-[18px] md:text-[20px] font-medium text-[#6B3419] mb-4 animate-fadeInUp">
              आवडले तर लोकांना सांगा, नाही आवडले तर आम्हाला सांगा.
            </h5>

            {/* Order CTA Heading */}
            <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-[#6B3419] leading-tight mb-8 animate-fadeInUp">
              We Accept orders for all the Functions!
            </h2>

            {/* QR Code Container */}
            <div className="bg-[#6B3419] p-6 rounded-lg w-fit flex flex-col items-center shadow-lg animate-zoomIn delay-300">
              <span className="text-white font-sans text-sm font-semibold mb-3">Follow us on 📷</span>
              <div className="bg-white p-2 rounded-md">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Screenshot_3-4-2025_15458_-4.jpeg"
                  alt="Instagram QR Code"
                  width={180}
                  height={180}
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 max-w-[580px] animate-fadeIn">
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-[#EEEEEE]">
              <h2 className="font-heading text-[32px] font-bold text-[#080C0E] mb-8">
                Get In Touch
              </h2>
              
              <form className="space-y-4">
                {/* Name Field */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Name *" 
                    required
                    className="w-full px-4 py-3 rounded-md border border-[#EEEEEE] focus:border-[#FF7F27] focus:ring-1 focus:ring-[#FF7F27] outline-none font-body text-base placeholder:text-[#999999] transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    required
                    className="w-full px-4 py-3 rounded-md border border-[#EEEEEE] focus:border-[#FF7F27] focus:ring-1 focus:ring-[#FF7F27] outline-none font-body text-base placeholder:text-[#999999] transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 rounded-md border border-[#EEEEEE] focus:border-[#FF7F27] focus:ring-1 focus:ring-[#FF7F27] outline-none font-body text-base placeholder:text-[#999999] transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea 
                    placeholder="Comment or Message *" 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-[#EEEEEE] focus:border-[#FF7F27] focus:ring-1 focus:ring-[#FF7F27] outline-none font-body text-base placeholder:text-[#999999] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="bg-[#FF7F27] text-white font-sans font-semibold text-base py-3 px-8 rounded-md hover:bg-[#e66c1b] transition-colors duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      {/* Optional Wave Divider at the bottom for footer transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="relative block w-[100%] h-[60px] fill-[#080C0E]"
        >
          <path d="M0,0 Q150,150 400,0 L500,150 L0,150 Z" className="fill-secondary opacity-0"></path>
          {/* This matches the aesthetic of 'wave-brush' mentioned in high level design */}
          <path d="M0.00,49.98 C149.99,150.00 271.49,-25.41 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-[#080C0E]"></path>
        </svg>
      </div>
    </section>
  );
}