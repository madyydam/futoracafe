import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ethan Lucas',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/user-1_2x-5.png',
    text: 'Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem.',
  },
  {
    name: 'Sara Freeman',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/user-2_2x-6.png',
    text: 'Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem.',
  },
  {
    name: 'Kelly Carpenter',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/user-3_2x-7.png',
    text: 'Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum, in volutpat sem.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F5F1E1] py-[100px] px-6">
      <div className="container mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <h2 className="font-traditional text-[45px] leading-[1.2] text-[#3C2415] mb-4">
            Testimonials
          </h2>
          <div className="flex justify-center">
            <p className="max-w-[700px] text-[16px] leading-[1.6] text-[#3C2415] font-body">
              Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-[30px] rounded-[20px] shadow-soft flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Avatar with circular mask */}
              <div className="relative w-[100px] h-[100px] mb-6">
                <div className="food-mask w-full h-full border-[4px] border-[#FF6B35]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quote Text */}
              <div className="mb-6">
                <p className="font-body text-[16px] italic leading-[1.6] text-[#3C2415]">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              {/* Name */}
              <h6 className="font-title text-[24px] font-bold text-[#FF6B35]">
                {testimonial.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;