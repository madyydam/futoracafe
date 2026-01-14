import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Very good place for breakfast. There are many types of dosa you can not even imagine and delicious. Highly recommed there all their speciality dosa's.",
      name: "Kajal Gaikwad",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOSA_CAFE-removebg-preview-e1743673847897-30.png",
      rating: 5,
    },
    {
      text: "Being a student living far from home all I miss is eating mangoes and its various dishes. Last Sunday evening I visited the Prabhat Road outlet and tried mango blast and mango with icecream and it was heavenly Totally worth the money and taste was amazing",
      name: "Aarya Gawande",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOSA_CAFE-removebg-preview-e1743673847897-30.png",
      rating: 5,
    },
    {
      text: "SA Dosa near Garware College Metro Station offers an authentic South Indian experience with flavorful masala dosa, uthappam, and crispy vada. The rich dry fruit mango milkshake is a must-try. Warm ambiance, cultural décor, and reasonable prices make it a top spot in Pune!",
      name: "Dr. Saranya Sasi",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/181cb15d-0961-460f-888f-83bfd54e1847-sadosacafe-com/assets/images/SA_DOSA_CAFE-removebg-preview-e1743673847897-30.png",
      rating: 5,
    },
  ];

  return (
    <section 
      className="relative w-full bg-[#FFB331] py-[80px] px-4 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #FFB331 0%, #FFB331 100%)'
      }}
    >
      {/* Wave Brush Top Divider Effect (Simulated by styling of previous section or margin) */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[#F7F1E1] brush-divider rotate-180 -scale-y-100 hidden md:block" />

      <div className="container mx-auto max-w-[1140px]">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <div className="bg-white px-6 py-2 rounded-[15px] shadow-sm transform -rotate-1">
              <span className="font-display text-[48px] md:text-[60px] text-brand-brown leading-tight">
                Sa Dosa Cafe
              </span>
            </div>
            <h3 className="font-heading text-[24px] md:text-[32px] font-semibold text-brand-brown">
              Loved By Food Lovers Everywhere
            </h3>
          </div>
          
          <p className="font-heading text-[18px] md:text-[20px] text-brand-brown font-medium">
            Don&apos;t Just Take Our Word For It—See What Our Happy Customers Say!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {reviews.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#FFEEB3] border-[3px] border-white rounded-[20px] rounded-br-[80px] p-8 flex flex-col justify-between shadow-card relative min-h-[420px]"
            >
              <div className="mb-6">
                <p className="font-body text-[16px] leading-[1.6] text-brand-brown text-left whitespace-pre-line">
                  {testimonial.text}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-col items-end">
                  <h5 className="font-heading text-[20px] font-bold text-brand-brown mb-1">
                    -{testimonial.name}
                  </h5>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFB331" color="#FFB331" />
                    ))}
                  </div>
                </div>

                {/* Avatar Positioning */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-[70px] h-[70px] rounded-full bg-white p-1 overflow-hidden shadow-sm">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;