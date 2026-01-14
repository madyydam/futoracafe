import React from 'react';
import Image from 'next/image';

const FooterCTA = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Outro Banner Section */}
      <section className="relative w-full bg-[#FDF5E1] py-20 overflow-hidden flex flex-col items-center justify-center">
        {/* Colorful Tribal Borders */}
        <div className="absolute top-0 left-0 w-full h-[30px] z-10">
          <svg
            viewBox="0 0 1440 30"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
          >
            <rect width="1440" height="30" fill="#FF8C42" />
            <path
              d="M0 15C15 15 25 5 40 5C55 5 65 15 80 15C95 15 105 25 120 25C135 25 145 15 160 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              className="opacity-50"
            />
            {/* Pattern of dots and triangles would go here - simplified for performance */}
            <circle cx="20" cy="15" r="4" fill="white" />
            <circle cx="60" cy="15" r="4" fill="white" />
            <circle cx="100" cy="15" r="4" fill="white" />
            <circle cx="140" cy="15" r="4" fill="white" />
            {/* ... repeated pattern ... */}
          </svg>
          <div className="absolute inset-0 flex items-center justify-around">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-white opacity-90" />
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white opacity-80" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tribal Border */}
        <div className="absolute bottom-0 left-0 w-full h-[40px] z-10 bg-[#FF8C42] flex items-center justify-around px-4">
           {[...Array(20)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white opacity-90" />
                <div className="w-3 h-3 rounded-full bg-white opacity-80" />
              </div>
            ))}
        </div>

        {/* Content Container */}
        <div className="container relative z-20 text-center px-6">
          {/* Decorative Tribal Symbols */}
          <div className="absolute top-0 left-10 md:left-24 opacity-40 animate-pulse">
            <div className="w-12 h-12 border-2 border-[#8E2121] rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#DAA520]" />
            </div>
          </div>
          <div className="absolute bottom-10 right-10 md:right-24 opacity-40">
             <div className="w-16 h-16 rounded-full border-4 border-[#1B5E20] border-dotted" />
          </div>

          <h3 className="font-hero text-[#DAA520] text-3xl md:text-5xl mb-6 italic" style={{ fontFamily: 'var(--font-hero)' }}>
            Step In, Savor, and Stay Awhile!
          </h3>

          <h2 className="font-header text-[#000000] text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto no-underline" style={{ fontFamily: 'var(--font-header)', textDecoration: 'none' }}>
            Where Every Bite Tells A Story,<br />
            And Every Visit Feels Like Home.<br />
            Come For The Food, Stay For The Vibe!
          </h2>

          <h3 className="font-hero text-[#8E2121] text-4xl md:text-6xl mt-8" style={{ fontFamily: 'var(--font-hero)' }}>
            Until We Meet
          </h3>
        </div>

        {/* Background blobs simulating the screenshot */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#F3EAD3] rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#DAA520] rounded-full blur-3xl opacity-10 -z-10" />
        
        {/* Swash image decoration on the right as per screenshot */}
        <div className="absolute right-0 bottom-10 w-48 h-24 md:w-64 md:h-32 opacity-80 pointer-events-none">
          <svg viewBox="0 0 300 100" className="w-full h-full">
            <path d="M0,50 Q150,0 300,50 Q150,100 0,50" fill="url(#rainbow)" />
            <defs>
              <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#DAA520' }} />
                <stop offset="50%" style={{ stopColor: '#FF8C42' }} />
                <stop offset="100%" style={{ stopColor: '#8E2121' }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer className="w-full bg-[#0B0B0B] text-white py-16 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Logo & Branding */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="relative w-48 h-28 md:w-56 md:h-32">
              <Image 
                src="https://sadosacafe.com/wp-content/uploads/2025/03/sadosalogo.png" 
                alt="Sa Dosa Cafe Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            {/* Manual Logo Text Emulation */}
            <div className="mt-4 flex flex-col items-center md:items-start">
               <span className="text-[#DAA520] text-3xl font-bold tracking-widest">सा डोसा</span>
               <span className="text-[#DAA520] text-xl font-semibold tracking-[0.2em] mt-1">SA DOSA CAFE</span>
               <p className="mt-2 text-xs text-gray-500 font-nav">The Taste of Tradition</p>
            </div>
          </div>

          {/* Column 2: Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#DAA520] font-header font-bold text-lg mb-6 uppercase tracking-wider">Our Social Link</h4>
            <div className="flex flex-col gap-4 font-body">
              <a href="https://www.facebook.com/sadosacafe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 active:scale-95">
                <span className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </span>
                Facebook
              </a>
              <a href="https://www.instagram.com/sa_dosacafe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 active:scale-95">
                <span className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </span>
                Instagram
              </a>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#DAA520] font-header font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-3 font-body text-gray-400 text-sm">
              <div className="flex items-start gap-4">
                <span className="text-[#DAA520] font-bold">Address:</span>
                <span className="text-right md:text-left">SADOSACAFE_MAIN_BRANCH</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#DAA520] font-bold">Phone:</span>
                <span>+91 84465 44544</span>
              </div>
              <div className="mt-4 text-xs italic">
                Need help or have a question?
              </div>
              <div>
                Contact us at: <a href="mailto:info@sadosacafe.com" className="text-white hover:underline">info@sadosacafe.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 font-nav uppercase tracking-widest">
          Copyright © Build and Design by Aquilla Marketers
        </div>
      </footer>
    </div>
  );
};

export default FooterCTA;