import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

/**
 * Header component for Sa Dosa Cafe.
 * Features a sticky navigation bar with social icons on the left,
 * logo in the center, and navigation links on the right.
 * Background is a translucent orange (#ffb331 with opacity).
 */
export default function Header() {
  const logoSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/sadosalogo-1.png";

  const navLinks = [
    { label: 'Home', href: 'https://sadosacafe.com/' },
    { label: 'Menu', href: 'https://sadosacafe.com/sadosa-menu/' },
    { label: 'Franchise', href: 'https://sadosacafe.com/sadosa-franchise/' },
    { label: 'Contact', href: 'https://sadosacafe.com/sadosa-contact/' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-[#ffb331]/90 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto max-w-[1140px] px-4 md:px-0 h-[80px] md:h-[100px] flex items-center justify-between">
        
        {/* Left: Social Media Icons */}
        <div className="flex items-center gap-4 flex-1">
          <a
            href="https://www.facebook.com/sadosacafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-brown transition-colors duration-200"
            aria-label="Facebook"
          >
            <div className="p-2 border border-white/20 rounded-full hover:bg-white/10">
              <Facebook size={20} strokeWidth={2} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/sa_dosacafe?igsh=MXFoZ2wxdmFyaTBxNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-brown transition-colors duration-200"
            aria-label="Instagram"
          >
            <div className="p-2 border border-white/20 rounded-full hover:bg-white/10">
              <Instagram size={20} strokeWidth={2} />
            </div>
          </a>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center flex-1">
          <a href="https://sadosacafe.com/" className="relative block h-[70px] w-[80px] md:h-[90px] md:w-[100px]">
            <Image
              src={logoSrc}
              alt="Sa Dosa Cafe Logo"
              fill
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Right: Navigation Links */}
        <nav className="hidden md:flex items-center justify-end gap-8 flex-1">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-akshar text-[16px] font-bold text-white uppercase tracking-wider hover:text-brand-brown transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button (Placeholder for functionality) */}
        <div className="md:hidden flex-1 flex justify-end">
          <button className="text-white p-2" aria-label="Toggle Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}