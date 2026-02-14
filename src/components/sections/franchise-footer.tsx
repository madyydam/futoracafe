import React from 'react';
import Image from 'next/image';

const FranchiseFooter = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/sadosacafe/' },
    { name: 'Instagram', url: 'https://www.instagram.com/sa_dosacafe?igsh=MXFoZ2wxdmFyaTBxNg==' },
  ];

  const contactDetails = {
    address: 'FC Road, Pune',
    phone: '+91 84466 53644',
    email: 'futoragroup@gmail.com',
  };

  const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOSA_CAFE-removebg-preview-e1743673847897-8.png";

  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div className="bg-[#111111] py-[80px]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

            {/* Logo Column */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-[300px] h-auto">
                <Image
                  src={logoAsset}
                  alt="Sa Dosa Cafe Logo"
                  width={300}
                  height={150}
                  className="object-contain"
                  style={{ filter: 'brightness(1.1)' }}
                />
              </div>
            </div>

            {/* Social Links Column */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-white font-bold text-[18px] font-body tracking-tight mb-2">
                Our Social Link
              </h3>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7A7A7A] hover:text-[#F5AF31] transition-colors duration-200 text-[14px] font-body"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
              <h3 className="text-white font-bold text-[18px] font-body tracking-tight mb-2">
                Contact Us
              </h3>
              <div className="space-y-4 text-[#7A7A7A] text-[14px] font-body leading-relaxed">
                <p>Address: {contactDetails.address}</p>
                <p>Phone: {contactDetails.phone}</p>
                <div className="mt-4">
                  <p>Need help or have a question?</p>
                  <p>
                    Contact us at:{' '}
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="hover:text-[#F5AF31] transition-colors duration-200"
                    >
                      {contactDetails.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#000000] py-6 border-t border-[#1a1a1a]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-start items-center">
            <p className="text-[#333333] text-[14px] font-body font-normal">
              Copyright © Build and Design by Aquilla Marketers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FranchiseFooter;