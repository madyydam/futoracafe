import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0c] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-[60px] pb-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="relative w-[280px] h-[120px] mb-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOSA_CAFE-removebg-preview-e1743673847897-30.png"
                alt="Sa Dosa Cafe Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-center text-center">
            <h5 className="font-heading text-[22px] font-semibold text-white mb-6 uppercase tracking-wider">
              Our Social Link
            </h5>
            <ul className="space-y-3 font-poppins text-[15px] text-[#a5a5a5]">
              <li>
                <a 
                  href="https://www.facebook.com/sadosacafe/" 
                  className="hover:text-primary transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/sa_dosacafe?igsh=MXFoZ2wxdmFyaTBxNg==" 
                  className="hover:text-primary transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h5 className="font-heading text-[22px] font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h5>
            <div className="space-y-4 font-poppins text-[15px] text-[#a5a5a5]">
              <p className="max-w-[300px] leading-[1.6]">
                Address: SADOSACAFE MAIN BRANCH
              </p>
              <p>
                Phone: <a href="tel:+918446544544" className="hover:text-primary transition-colors">+91 84465 44544</a>
              </p>
              <div className="pt-2">
                <p className="mb-1">Need help or have a question?</p>
                <p>
                  Contact us at: <a href="mailto:info@sadosacafe.com" className="hover:text-primary transition-colors">info@sadosacafe.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-[#1f1f21] py-6 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <p className="font-poppins text-[13px] text-[#6d6d6d] m-0">
            Copyright © Build and Design by Aquilla Marketers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;