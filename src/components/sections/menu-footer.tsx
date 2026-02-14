import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

const MenuFooter = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOSA_CAFE-removebg-preview-e1743673847897-14.png";

  return (
    <footer className="w-full">
      {/* Closing Banner Section */}
      <section className="relative w-full bg-[#F7F1E1] py-20 px-4 overflow-hidden">
        {/* Ethnic Pattern Top Border */}
        <div className="absolute top-0 left-0 w-full h-8 flex items-center overflow-hidden opacity-90">
          <div className="flex whitespace-nowrap min-w-full">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="flex items-center mx-2">
                <div className="w-4 h-4 rounded-full bg-[#FF8429] mr-2" />
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-[#A6603E]" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <p className="font-hero text-[#000000] text-4xl md:text-5xl lg:text-5xl italic mb-[-1.5rem]">
            Step In, Savor, and Stay Awhile!
          </p>

          <h2 className="text-[#0B0B0B] text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight max-w-2xl font-body">
            Where Every Bite Tells A Story,<br />
            And Every Visit Feels Like Home.<br />
            Come For The Food, Stay For The Vibe!
          </h2>

          <p className="font-hero text-[#0B0B0B] text-5xl md:text-6xl pt-4">
            Until We Meet
          </p>
        </div>

        {/* Ethnic Pattern Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-8 flex items-center overflow-hidden opacity-90">
          <div className="flex whitespace-nowrap min-w-full">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="flex items-center mx-2">
                <div className="w-4 h-4 rounded-full bg-[#FF8429] mr-2" />
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-[#A6603E]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dark Footer */}
      <section className="w-full bg-[#0B0B0B] text-white pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#222222] pb-16">

            {/* Branding Column */}
            <div className="flex flex-col items-start justify-center md:border-r md:border-[#222222] pr-8">
              <a href="/" className="block">
                <Image
                  src={logoUrl}
                  alt="Sa Dosa Cafe"
                  width={240}
                  height={100}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Social Link Column */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center md:border-r md:border-[#222222] px-8">
              <h3 className="font-nav text-sm font-bold uppercase tracking-wider mb-6">Our Social Link</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/sadosacafe/"
                  className="text-[#6B6B6B] hover:text-[#FF8429] transition-colors flex items-center gap-2 font-body text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={18} /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/sa_dosacafe?igsh=MXFoZ2wxdmFyaTBxNg=="
                  className="text-[#6B6B6B] hover:text-[#FF8429] transition-colors flex items-center gap-2 font-body text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="flex flex-col items-start md:items-end text-left md:text-right px-4">
              <h3 className="font-nav text-sm font-bold uppercase tracking-wider mb-6">Contact Us</h3>
              <div className="space-y-4 font-body text-sm text-[#6B6B6B]">
                <p>Address: FC Road, Pune</p>
                <p>Phone: +91 84466 53644</p>
                <div className="pt-4">
                  <p>Need help or have a question?</p>
                  <p>Contact us at: <a href="mailto:futoragroup@gmail.com" className="hover:text-white transition-colors">futoragroup@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-8 text-center md:text-left">
            <p className="text-[#6B6B6B] text-[12px] font-body">
              Copyright © Build and Design by Aquilla Marketers
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default MenuFooter;