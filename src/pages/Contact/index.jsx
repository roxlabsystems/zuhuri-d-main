import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event?.target?.value
    }));
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Expert Real Estate Guidance | Zuhuri Real Estate</title>
        <meta name="description" content="Contact Zuhuri Real Estate expert agents for personalized property guidance. Call +254 (7159) - 7547, email needhelp@company.com or visit us in Nairobi, Kenya." />
        <meta property="og:title" content="Contact Us - Get Expert Real Estate Guidance | Zuhuri Real Estate" />
        <meta property="og:description" content="Contact Zuhuri Real Estate expert agents for personalized property guidance. Call +254 (7159) - 7547, email needhelp@company.com or visit us in Nairobi, Kenya." />
      </Helmet>
      <main className="w-full bg-background-main">
        <Header />
        
        {/* Contact Section */}
        <section className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] md:pt-[70px] lg:pt-[84px]">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-[22px]">
              
              {/* Main Heading */}
              <h1 
                className="text-text-secondary"
                style={{
                  fontSize: '60px',
                  fontFamily: 'League Spartan',
                  fontWeight: '700',
                  lineHeight: '55px'
                }}
              >
                Contact
              </h1>

              {/* Content Container */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Left Column - Contact Info */}
                <div className="w-full lg:w-[52%] flex flex-col">
                  
                  {/* Subtitle */}
                  <h2 
                    className="text-text-muted mb-4 md:mb-5 lg:mb-[22px]"
                    style={{
                      fontSize: '20px',
                      fontFamily: 'League Spartan',
                      fontWeight: '500',
                      lineHeight: '19px'
                    }}
                  >
                    Get in touch with our expert agents
                  </h2>

                  {/* Description */}
                  <p 
                    className="text-text-primary mb-6 md:mb-7 lg:mb-[22px]"
                    style={{
                      fontSize: '20px',
                      fontFamily: 'League Spartan',
                      fontWeight: '400',
                      lineHeight: '18px'
                    }}
                  >
                    Our success is determined not only by the results we acquire, 
                    but also by the manner in which we achieve them on way to 
                    see that.
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-4 md:space-y-5 lg:space-y-[18px] px-4 md:px-5 lg:px-[24px]">
                    
                    {/* Phone Contact */}
                    <div className="flex items-start gap-3 md:gap-4">
                      <img 
                        src="/images/img_.png" 
                        alt="Phone" 
                        className="w-[18px] h-[23px] md:w-[20px] md:h-[26px] mt-1 flex-shrink-0"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 
                          className="text-text-secondary"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'League Spartan',
                            fontWeight: '500',
                            lineHeight: '17px'
                          }}
                        >
                          Have any question?
                        </h3>
                        <a 
                          href="tel:+254715975547"
                          className="text-text-primary hover:text-text-secondary transition-colors duration-200"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'League Spartan',
                            fontWeight: '200',
                            lineHeight: '17px'
                          }}
                        >
                          Call +254 (7159) - 7547
                        </a>
                      </div>
                    </div>

                    {/* Email Contact */}
                    <div className="flex items-start gap-3 md:gap-4">
                      <img 
                        src="/images/img__26x20.png" 
                        alt="Email" 
                        className="w-[18px] h-[23px] md:w-[20px] md:h-[26px] mt-1 flex-shrink-0"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 
                          className="text-text-secondary"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'League Spartan',
                            fontWeight: '500',
                            lineHeight: '17px'
                          }}
                        >
                          Write email
                        </h3>
                        <a 
                          href="mailto:needhelp@company.com"
                          className="text-text-primary hover:text-text-secondary transition-colors duration-200 ml-4"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'League Spartan',
                            fontWeight: '200',
                            lineHeight: '17px'
                          }}
                        >
                          needhelp@company.com
                        </a>
                      </div>
                    </div>

                    {/* Location Contact */}
                    <div className="flex items-start gap-3 md:gap-4">
                      <img 
                        src="/images/img__1.png" 
                        alt="Location" 
                        className="w-[18px] h-[23px] md:w-[20px] md:h-[26px] mt-1 flex-shrink-0"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 
                          className="text-text-secondary"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'League Spartan',
                            fontWeight: '500',
                            lineHeight: '17px'
                          }}
                        >
                          Visit now
                        </h3>
                        <span 
                          className="text-text-primary ml-10"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'League Spartan',
                            fontWeight: '200',
                            lineHeight: '17px'
                          }}
                        >
                          Nairobi, Kenya
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="mt-6 md:mt-8 lg:mt-[35px] space-y-4 md:space-y-5 lg:space-y-[26px]">
                    
                    {/* Full Name Input */}
                    <EditText
                      placeholder="Full Name"
                      text_font_size="18"
                      text_font_family="Roboto"
                      text_font_weight="100"
                      text_line_height="22px"
                      text_text_align="left"
                      text_color="#000000"
                      border_border="1px solid #1e1b54"
                      border_border_radius="10px"
                      padding="18px 12px"
                      value={formData?.fullName}
                      onChange={handleInputChange('fullName')}
                      required
                    />

                    {/* Email Input */}
                    <EditText
                      type="email"
                      placeholder="Email Address"
                      text_font_size="18"
                      text_font_family="Roboto"
                      text_font_weight="100"
                      text_line_height="22px"
                      text_text_align="left"
                      text_color="#000000"
                      border_border="1px solid #1e1b54"
                      border_border_radius="10px"
                      padding="18px 12px"
                      value={formData?.email}
                      onChange={handleInputChange('email')}
                      required
                    />

                    {/* Phone Input */}
                    <EditText
                      type="tel"
                      placeholder="Phone Number"
                      text_font_size="18"
                      text_font_family="Roboto"
                      text_font_weight="100"
                      text_line_height="22px"
                      text_text_align="left"
                      text_color="#000000"
                      border_border="1px solid #1e1b54"
                      border_border_radius="10px"
                      padding="18px 12px"
                      value={formData?.phone}
                      onChange={handleInputChange('phone')}
                      required
                    />

                    {/* Message TextArea */}
                    <TextArea
                      placeholder="Message"
                      text_font_size="18"
                      text_font_family="Roboto"
                      text_font_weight="100"
                      text_line_height="22px"
                      text_text_align="left"
                      text_color="#000000"
                      border_border="1px solid #1e1b54"
                      border_border_radius="10px"
                      padding="24px 12px"
                      rows={6}
                      value={formData?.message}
                      onChange={handleInputChange('message')}
                      required
                    />

                    {/* Submit Button and WhatsApp */}
                    <div className="flex items-center gap-6 md:gap-8 lg:gap-[38px] pt-4 md:pt-6 lg:pt-[38px]">
                      <Button
                        text="Submit"
                        text_font_size="28"
                        text_font_family="League Spartan"
                        text_font_weight="600"
                        text_line_height="26px"
                        text_text_align="center"
                        text_color="#ffffff"
                        fill_background_color="#1e1b54"
                        border_border_radius="26px"
                        padding="5px 48px 5px 30px"
                        className="relative hover:bg-primary-dark transition-all duration-200"
                        type="submit"
                      >
                        <span className="flex items-center gap-3">
                          Submit
                          <img 
                            src="/images/img_group_2.svg" 
                            alt="" 
                            className="w-[18px] h-[18px]"
                          />
                        </span>
                      </Button>

                      <a 
                        href="https://wa.me/254796370788" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                        aria-label="Contact us on WhatsApp"
                      >
                        <img 
                          src="/images/img_phone_call_1.png" 
                          alt="WhatsApp Contact" 
                          className="w-[48px] h-[48px] md:w-[54px] md:h-[54px]"
                        />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;