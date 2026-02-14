thoughtfulness
import React from 'react';
import Image from 'next/image';

/**
 * ContactFormIntegration Component
 * 
 * A complex lower section featuring:
 * - Orange wavy-brush top divider.
 * - Left-side content area with Marathi branding, order text, and QR code block.
 * - Right-side white contact form titled "Get In Touch".
 */
export default function ContactFormIntegration() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Wave Brush Top Divider */}
      <div 
        className="absolute top-0 left-0 w-full h-[100px] z-10"
        style={{
          backgroundColor: '#FBB64B',
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          maskSize: 'cover',
          maskRepeat: 'no-repeat',
          maskPosition: 'bottom',
          transform: 'translateY(-99%)'
        }}
      />

      {/* Main Content Area */}
      <div className="bg-[#FBB64B] pt-20 pb-20 md:pt-32 md:pb-32 px-4">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Branding & QR Code */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="max-w-[300px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Sa-dosa-marathi-01-e1743672639903-300x85-3.png"
                alt="सा डोसा"
                width={300}
                height={85}
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-4">
              <h5 className="font-heading text-[22px] font-medium text-[#1A1A1A] leading-relaxed">
                आवडले तर लोकांना सांगा,नाही आवडले तर आम्हाला सांगा.
              </h5>
              <h2 className="font-heading text-[30px] md:text-[35px] font-bold text-[#1A1A1A] leading-tight">
                We Accept orders for all the Functions!
              </h2>
            </div>

            {/* QR Code Container */}
            <div className="bg-[#843212] p-6 rounded-[15px] shadow-lg max-w-[250px] flex flex-col items-center animate-in zoom-in duration-700 delay-300">
              <div className="text-white font-heading text-sm font-semibold mb-3 border border-white/30 px-3 py-1 rounded-full flex items-center gap-2">
                Follow us on <span>📸</span>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/Screenshot_3-4-2025_15458_-4.jpeg"
                  alt="Instagram QR Code"
                  width={182}
                  height={190}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white rounded-[15px] p-8 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="font-heading text-[30px] md:text-[35px] font-bold text-[#1A1A1A] mb-8">
              Get In Touch
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E1E1E1] focus:outline-none focus:ring-2 focus:ring-[#FF6B1A] font-heading text-sm text-[#1A1A1A] placeholder:text-[#737373]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E1E1E1] focus:outline-none focus:ring-2 focus:ring-[#FF6B1A] font-heading text-sm text-[#1A1A1A] placeholder:text-[#737373]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E1E1E1] focus:outline-none focus:ring-2 focus:ring-[#FF6B1A] font-heading text-sm text-[#1A1A1A] placeholder:text-[#737373]"
                />
              </div>
              
              <div className="space-y-2">
                <textarea 
                  placeholder="Comment or Message *" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E1E1E1] focus:outline-none focus:ring-2 focus:ring-[#FF6B1A] font-heading text-sm text-[#1A1A1A] placeholder:text-[#737373] resize-none"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-[#FF6B1A] text-white font-heading font-bold px-8 py-4 rounded-[5px] hover:brightness-110 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}