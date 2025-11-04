import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import WhyChooseUs from './WhyChooseUs';
import TeamSection from './TeamSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Zuhuri Real Estate - Our Mission, Vision & Expert Team | Kenya Property Specialists</title>
        <meta name="description" content="Learn about Zuhuri Real Estate's mission to connect global investors with secure Kenyan properties. Meet our expert team of real estate professionals serving diaspora clients since inception." />
        <meta property="og:title" content="About Zuhuri Real Estate - Our Mission, Vision & Expert Team | Kenya Property Specialists" />
        <meta property="og:description" content="Learn about Zuhuri Real Estate's mission to connect global investors with secure Kenyan properties. Meet our expert team of real estate professionals serving diaspora clients since inception." />
      </Helmet>

      <Header />
      
      <main>
        <MissionVision />
        <CoreValues />
        <WhyChooseUs />
        <TeamSection />
      </main>

      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50">
        <button 
          className="w-[60px] h-[60px] md:w-[86px] md:h-[86px] bg-secondary-background rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
          aria-label="Contact Support"
        >
          <svg 
            className="w-6 h-6 md:w-8 md:h-8 text-primary-background" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default About;