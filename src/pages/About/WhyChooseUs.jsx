import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center bg-gray-100">
      <div className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Card container */}
        <div 
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/img_group_43.svg')" }}
          ></div>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="relative p-6 sm:p-10 md:p-12 text-white z-10">
            {/* Section Title */}
            <h2 className="text-xl sm:text-2xl font-league font-bold mb-4">
              Why Choose Us
            </h2>

            {/* Main Text */}
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              At Zuhuri Real Estate, we go beyond selling properties — we provide peace of mind. Whether you are in Kenya, living abroad, or investing from overseas, you can count on us for trustworthy, transparent, and professional service every step of the way. We combine deep local market expertise with global client support to offer you secure, high potential real estate opportunities across Kenya.
            </p>

            {/* Key Reasons in blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                'Trusted by diaspora and local clients',
                'Transparent and secure transactions',
                'Experienced, professional, and responsive team',
                'Verified properties in prime and growing locations',
                'Flexible payment plans and investment options',
                'End-to-end client support, wherever you are',
              ].map((reason, i) => (
                <div key={i} className="bg-white bg-opacity-80 rounded-xl p-4 shadow-sm text-gray-900 font-regular text-sm sm:text-base">
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
