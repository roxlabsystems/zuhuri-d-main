import React, { useState, useEffect } from "react";
import RatingBar from "../../components/ui/RatingBar";

const testimonials = [
  {
    id: 1,
    name: "Philip Wambalaba",
    title: "Entrepreneur",
    rating: 5,
    text: `Hi Zuhuri,

"10/10. Incredible customer service. Dynamic and accommodating in terms of location search and our unique needs in real estate. Would use their services again & recommend them."`,
  },
  {
    id: 2,
    name: "Mary A.",
    title: "Mombasa",
    rating: 5,
    text: `"I had been searching for a family home for months until I came across Zuhuri. They understood exactly what I needed and delivered a house that matched my budget and lifestyle. The process was smooth, professional, and fast."`,
  },
  {
    id: 3,
    name: "Brian O.",
    title: "Kisumu",
    rating: 5,
    text: `"Zuhuri Real Estate helped me find the perfect rental apartment within days. The property was exactly as advertised, and the customer service was excellent. They made moving so much easier for me."`,
  },
  {
    id: 4,
    name: "Sophia N.",
    title: "Diaspora Investor",
    rating: 5,
    text: `"I entrusted Zuhuri with managing my rental units, and I’ve never looked back. Rent collection, tenant screening, and maintenance are all handled seamlessly. My income is steady, and I have peace of mind knowing my property is in good hands."`,
  },
  {
    id: 5,
    name: "Daniel M.",
    title: "USA",
    rating: 5,
    text: `"As someone living abroad, I was always hesitant to invest back home. But Zuhuri Real Estate gave me confidence with their clear communication, regular updates, and secure processes. I now own property in Kenya without having to travel, and everything was handled professionally."`,
  },
  {
    id: 6,
    name: "James K.",
    title: "Nairobi",
    rating: 5,
    text: `"Buying land with Zuhuri Real Estate was one of the best decisions I’ve ever made. The team guided me through every step, from site visits to title processing, with complete transparency. I now own a plot in a prime location with zero stress. Highly recommend them!"`,
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="relative w-full bg-white py-16 mb-20 flex flex-col items-center overflow-visible">
      {/* Section Title */}
      <div className="relative z-50 flex flex-col items-center mb-12">
        <h2 className="text-[#1E1B54] text-2xl md:text-3xl font-semibold font-['League_Spartan'] text-center">
          Testimonials
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2 font-['League_Spartan'] font-light text-center">
          What our clients are saying
        </p>
      </div>

      {/* Card Container */}
      <div
        className="relative z-10 w-[90%] max-w-[1300px] flex justify-center items-center cursor-pointer"
        onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
      >
        {/* Background rectangle */}
        <div className="absolute inset-0 w-full h-[350px] bg-[#D6D3E9] rotate-[-2deg] rounded-md shadow-md z-0"></div>

        {/* Foreground tilted card */}
        <div className="relative w-full h-[350px] bg-[#1E1B54] rotate-[2deg] text-white rounded-md shadow-lg p-8 flex flex-col justify-center transition-all duration-700 ease-in-out z-20">
          {/* Rating */}
          <div className="flex justify-center mb-4">
            <RatingBar rating={testimonial.rating} readOnly={true} size="medium" />
          </div>

          {/* Text */}
          <p className="text-center text-sm md:text-base leading-snug font-['League_Spartan'] whitespace-pre-line font-light">
            {testimonial.text}
          </p>

          {/* Name */}
          <p className="text-right mt-6 text-sm md:text-base font-['League_Spartan'] font-light">
            — {testimonial.name}, {testimonial.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
