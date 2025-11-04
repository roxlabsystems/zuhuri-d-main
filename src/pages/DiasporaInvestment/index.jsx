import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import InvestmentProcess from './InvestmentProcess';
import FAQSection from './FAQSection';

const DiasporaInvestment = () => {
  return (
    <>
      <Helmet>
        <title>
          Diaspora Investment Process | Zuhuri Real Estate - 6-Step Property Investment Guide
        </title>
        <meta
          name="description"
          content="Discover Zuhuri's simple 6-step diaspora investment process for buying property in Kenya from abroad. From initial inquiry to title deed delivery - we handle everything."
        />
        <meta
          property="og:title"
          content="Diaspora Investment Process | Zuhuri Real Estate - 6-Step Property Investment Guide"
        />
        <meta
          property="og:description"
          content="Discover Zuhuri's simple 6-step diaspora investment process for buying property in Kenya from abroad. From initial inquiry to title deed delivery - we handle everything."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="w-full relative flex items-center"
          style={{
            backgroundImage:
              "url('/images/img_whatsapp_image_20250924_at_154553a9c33fb2_1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '450px', 
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-primary-medium"></div>

          <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-4xl space-y-6 md:space-y-8 ml-8 md:ml-16 lg:ml-24">
              {/* ↑ Added margin-left to shift text right */}

              {/* Main Heading */}
              <h1
                className="text-white"
                style={{
                  fontSize: '48px',
                  fontFamily: 'League Spartan',
                  fontWeight: '700',
                  lineHeight: '44px',
                }}
              >
                Your Property<br />
                is Closer Than You Think
              </h1>

              {/* Description */}
              <p
                className="text-white max-w-3xl"
                style={{
                  fontSize: '24px',
                  fontFamily: 'League Spartan',
                  fontWeight: '300',
                  lineHeight: '22px',
                }}
              >
                Investing back home should not feel daunting. At Zuhuri we
                simplify everything from choosing property to owning the title
                so you can invest with confidence, clarity, and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Process Section */}
        <InvestmentProcess />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-4 md:right-8 lg:right-16 z-50">
        <button
          className="w-[70px] h-[70px] md:w-[86px] md:h-[86px] bg-primary-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center"
          aria-label="Contact us"
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </button>
      </div>

      <Footer />
    </>
  );
};

export default DiasporaInvestment;
