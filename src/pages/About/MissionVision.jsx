import React from 'react';

const MissionVision = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mission Vision Image */}
          <div className="w-full lg:w-[46%] flex justify-center">
            <img 
              src="/images/img_whatsapp_image_2025_09_24.png" 
              alt="Our Mission and Vision" 
              className="w-full max-w-[400px] lg:max-w-[534px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Mission and Vision Content */}
          <div className="w-full lg:w-[42%] space-y-8 lg:space-y-12">
            {/* Our Mission */}
            <div className="space-y-4 lg:space-y-6">
              <h2 
                className="text-primary-background"
                style={{
                  fontSize: '20px',
                  fontFamily: 'League Spartan',
                  fontWeight: '700',
                  lineHeight: '19px',
                  textAlign: 'left'
                }}
              >
                Our Mission
              </h2>
              <p 
                className="text-text-primary text-justify"
                style={{
                  fontSize: '16px',
                  fontFamily: 'League Spartan',
                  fontWeight: '400',
                  lineHeight: '15px'
                }}
              >
                To connect individuals, families, and investors both in Kenya & around the world with secure, high-value real estate opportunities, by offering trusted guidance, professional service, and innovative solutions that make property ownership in Kenya simple and rewarding.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-4 lg:space-y-6">
              <h2 
                className="text-primary-background"
                style={{
                  fontSize: '20px',
                  fontFamily: 'League Spartan',
                  fontWeight: '700',
                  lineHeight: '19px',
                  textAlign: 'left'
                }}
              >
                Our Vision
              </h2>
              <p 
                className="text-text-primary text-justify"
                style={{
                  fontSize: '16px',
                  fontFamily: 'League Spartan',
                  fontWeight: '400',
                  lineHeight: '15px'
                }}
              >
                To become Kenya's leading real estate brand recognized for making property ownership easy, trustworthy, and accessible for Kenyans at home, in the diaspora, and global investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;