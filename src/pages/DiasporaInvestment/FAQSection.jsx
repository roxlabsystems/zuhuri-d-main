import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const FAQSection = () => {
  const faqData = [
    {
      question: "Can I buy without being in Kenya?",
      answer: "Absolutely. We handle everything on your behalf."
    },
    {
      question: "How do I pay from overseas?",
      answer: "Bank transfers, mobile money, SACCO options with digital receipts."
    },
    {
      question: "How do I know the property is genuine?",
      answer: "We conduct title and ownership verification before listing."
    },
    {
      question: "Can you manage the property for me?",
      answer: "Yes-we handle rentals, tenant screening, maintenance, and rent collection."
    },
    {
      question: "Can I invest together with others?",
      answer: "Yes -SACCOs and groups welcome!"
    }
  ];

  return (
    <section className="w-full bg-background-main py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          
          {/* FAQ Content */}
          <div className="flex-1 space-y-6 md:space-y-8 ml-13 lg:ml-20">
          
            <h2 
              className="text-primary-background"
              style={{
                fontSize: '24px',
                fontFamily: 'League Spartan',
                fontWeight: '700',
                lineHeight: '30px'
              }}
            >
              FAQ
            </h2>

            {/* FAQ Items */}
            <div className="space-y-4 md:space-y-6">
              {faqData?.map((faq, index) => (
                <div key={index} className="space-y-2">
                  {/* Question */}
                  <h3 
                    className="text-text-primary"
                    style={{
                      fontSize: '16px',
                      fontFamily: 'League Spartan',
                      fontWeight: '600',
                      lineHeight: '19px'
                    }}
                  >
                    {faq?.question}
                  </h3>
                  
                  {/* Answer */}
                  <p 
                    className="text-text-primary"
                    style={{
                      fontSize: '20px',
                      fontFamily: 'League Spartan',
                      fontWeight: '400',
                      lineHeight: '19px'
                    }}
                  >
                    {faq?.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ready to Invest Button */}
          <div className="flex justify-end lg:self-end lg:mb-20 mr-13 lg:mr-20">
            <Link to="/contact">
              <Button
                text="Ready to Invest?"
                text_font_size="24"
                text_font_family="League Spartan"
                text_font_weight="600"
                text_line_height="23px"
                text_text_align="left"
                text_color="#ffffff"
                fill_background_color="#1e1b54"
                border_border_radius="26px"
                padding="6px 20px 6px 40px"
                className="flex items-center gap-4 hover:bg-primary-dark transition-all duration-200"
              >
                <span>Ready to Invest?</span>
                
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;