import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Concluding Section: "Until We Meet" Block */}
      <section className="bg-[#F6F1DC] py-[100px] flex flex-col items-center text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="font-display italic text-[#666666] text-[32px] mb-4">
            Step In, Savor, and Stay Awhile!
          </p>
          <h2 className="font-heading text-[#000000] text-[42px] leading-[1.1] font-bold mb-6 italic relative after:content-none">
            Where Every Bite Tells A Story,<br />
            And Every Visit Feels Like Home.<br />
            Come For The Food, Stay For The Vibe!
          </h2>
          <p className="font-display text-[#000000] text-[48px]">
            Until We Meet
          </p>
        </div>
      </section>

      {/* Main Black Footer Section */}
      <div className="bg-[#0A0A0A] text-white pt-[60px] pb-[40px]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 px-6 lg:px-12">
            
            {/* Column 1: Logo */}
            <div className="flex flex-col items-center md:items-start justify-center">
              <Link href="/" className="inline-block">
                <div className="text-white font-display text-[48px] italic leading-tight">
                  The Common Cafe
                </div>
              </Link>
            </div>

            {/* Column 2: Contact Us */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h4 className="font-nav text-[18px] font-bold text-white mb-6 uppercase tracking-wider">
                Contact Us
              </h4>
              <div className="space-y-4 text-[#666666] font-sans text-[14px] leading-relaxed">
                <p>Address: <span className="hover:text-white transition-colors cursor-default">Downtown Hub, City Center</span></p>
                <p>Phone: <a href="tel:+918446544544" className="hover:text-white transition-colors">+91 84465 44544</a></p>
                <div className="mt-4">
                  <p>Need help or have a question?</p>
                  <p>Contact us at: <a href="mailto:hello@thecommoncafe.com" className="text-[#EB6D48] hover:underline">hello@thecommoncafe.com</a></p>
                </div>
              </div>
            </div>
          </div>


        {/* Footer Bottom Bar */}
        <div className="border-t border-[#333333] mt-[60px] pt-6 px-6">
          <div className="container mx-auto">
            <p className="text-[#666666] font-sans text-[12px] text-center md:text-left">
              Copyright © Build and Design by Aquilla Marketers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;