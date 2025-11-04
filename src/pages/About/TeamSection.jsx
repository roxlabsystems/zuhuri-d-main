import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Cynthia Rasimilwa",
      position: "C.E.O",
      image: "/images/img_group_69.svg"
    },
    {
      name: "James Mwangi",
      position: "Director",
      image: "/images/img_group_69.svg"
    },
    {
      name: "Eunice Maina",
      position: "Director",
      image: "/images/img_group_69.svg"
    },
    {
      name: "Samuel Mutuura",
      position: "Sales Representative",
      image: "/images/img_group_69.svg"
    },
    {
      name: "Francis Mwangi",
      position: "Sales Representative",
      image: "/images/img_group_69.svg"
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-primary-background">
              <span 
                style={{
                  fontSize: '32px',
                  fontFamily: 'League Spartan',
                  fontWeight: '500',
                  lineHeight: '30px',
                  color: '#f3c225'
                }}
              >
                Our
              </span>
              <span 
                style={{
                  fontSize: '32px',
                  fontFamily: 'League Spartan',
                  fontWeight: '800',
                  lineHeight: '30px',
                  color: '#f3c225'
                }}
              >
                {' '}
              </span>
              <span 
                style={{
                  fontSize: '32px',
                  fontFamily: 'League Spartan',
                  fontWeight: '800',
                  lineHeight: '30px',
                  color: '#1e1b54'
                }}
              >
                Team
              </span>
            </h2>
            <p 
              className="text-text-primary text-center max-w-3xl mx-auto"
              style={{
                fontSize: '20px',
                fontFamily: 'League Spartan',
                fontWeight: '400',
                lineHeight: '18px'
              }}
            >
              We are a dedicated team driven by passion, expertise, and a shared vision to deliver exceptional results. Together, we turn ideas into reality with integrity and creativity
            </p>
          </div>

          {/* Team Grid - First Row (3 members) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
            {teamMembers?.slice(0, 3)?.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden mb-4"
                  style={{
                    backgroundImage: `url('${member?.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Member Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-primary-background p-4 md:p-6">
                    <div className="text-center space-y-1">
                      <h3 
                        className="text-white"
                        style={{
                          fontSize: '20px',
                          fontFamily: 'League Spartan',
                          fontWeight: '600',
                          lineHeight: '19px'
                        }}
                      >
                        {member?.name}
                      </h3>
                      <p 
                        className="text-white"
                        style={{
                          fontSize: '20px',
                          fontFamily: 'League Spartan',
                          fontWeight: '400',
                          lineHeight: '19px'
                        }}
                      >
                        {member?.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Grid - Second Row (2 members centered) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-2xl">
              {teamMembers?.slice(3, 5)?.map((member, index) => (
                <div key={index + 3} className="flex flex-col items-center">
                  <div 
                    className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden mb-4"
                    style={{
                      backgroundImage: `url('${member?.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Member Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-primary-background p-4 md:p-6">
                      <div className="text-center space-y-1">
                        <h3 
                          className="text-white"
                          style={{
                            fontSize: '20px',
                            fontFamily: 'League Spartan',
                            fontWeight: '600',
                            lineHeight: '19px'
                          }}
                        >
                          {member?.name}
                        </h3>
                        <p 
                          className="text-white"
                          style={{
                            fontSize: '20px',
                            fontFamily: 'League Spartan',
                            fontWeight: '400',
                            lineHeight: '19px'
                          }}
                        >
                          {member?.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working With Section */}
          <div className="text-center pt-8 md:pt-12 lg:pt-16">
            <h3 
              className="text-primary-background"
              style={{
                fontSize: '24px',
                fontFamily: 'League Spartan',
                fontWeight: '700',
                lineHeight: '22px'
              }}
            >
              We are working with
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;