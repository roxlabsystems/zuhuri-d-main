import React from 'react';

const CoreValues = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, & accountability at all levels.",
      color: "#423f6f"
    },
    {
      title: "Excellence",
      description: "We strive to deliver high quality properties and services that add value & peace of mind to our clients.",
      color: "#27245b"
    },
    {
      title: "Reliability & Accountability",
      description: "We deliver on our promises and take full responsibility for ensuring a seamless & secure property ownership journey.",
      color: "#27245b"
    },
    {
      title: "Customer Focus",
      description: "We are dedicated to delivering a personalized and seamless property experience by being attentive, responsive, and committed to every client's goals.",
      color: "#423f6f"
    },
    {
      title: "Innovation & Adaptability",
      description: "We embrace modern tools & digital solutions to simplify property acquisition and enhance customer experience especially for clients abroad.",
      color: "#1e1b54f4"
    },
    {
      title: "Global Perspective, Local Expertise",
      description: "We bridge the gap between international clients and local opportunities through deep market knowledge and cultural understanding.",
      color: "#423f6f"
    },
    {
      title: "Sustainability",
      description: "We are dedicated to delivering a personalized and seamless property experience by being attentive, responsive, and committed to every client's goals.",
      color: "#27245b"
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-8 sm:px-10 lg:px-12">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Section Title */}
          <div className="text-center mx-4 sm:mx-6 lg:mx-8">
            <h2 
              className="text-primary-background"
              style={{
                fontSize: '32px',
                fontFamily: 'League Spartan',
                fontWeight: '800',
                lineHeight: '30px'
              }}
            >
              Our Core Values
            </h2>
          </div>

          {/* Core Values Image */}
          <div className="flex justify-center mx-4 sm:mx-6 lg:mx-8">
            <img 
              src="/images/img_whatsapp_image_2025_09_24_506x1130.png" 
              alt="Our Core Values" 
              className="w-full max-w-[800px] lg:max-w-[1130px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mx-8 sm:mx-6 lg:mx-8">
            {coreValues?.map((value, index) => (
              <div key={index} className="space-y-3 md:space-y-2 px-4 sm:px-6 lg:px-8">
                <h3 
                  style={{
                    fontSize: '20px',
                    fontFamily: 'League Spartan',
                    fontWeight: '600',
                    lineHeight: '19px',
                    textAlign: 'left',
                    color: value?.color
                  }}
                >
                  {value?.title}
                </h3>
                <p 
                  className="text-text-primary"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'League Spartan',
                    fontWeight: '400',
                    lineHeight: '15px',
                    textAlign: 'left'
                  }}
                >
                  {value?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

