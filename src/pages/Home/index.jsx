import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import HeroSection from "./HeroSection";
import PropertyShowcase from "./PropertyShowcase";
import PropertyFeatures from "./PropertyFeatures";
import CallToAction from "./CallToAction";
import PropertyTypes from "./PropertyTypes";
import PropertyDiscovery from "./PropertyDiscovery";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Find Your Perfect Property in Kenya | Zuhuri Real Estate - Premium
          Land & Homes
        </title>
        <meta
          name="description"
          content="Discover premium properties in Kenya with Zuhuri Real Estate. Specializing in land sales, luxury homes, commercial spaces & diaspora investment services. Find your place, live without limits."
        />
        <meta
          property="og:title"
          content="Find Your Perfect Property in Kenya | Zuhuri Real Estate - Premium Land & Homes"
        />
        <meta
          property="og:description"
          content="Discover premium properties in Kenya with Zuhuri Real Estate. Specializing in land sales, luxury homes, commercial spaces & diaspora investment services. Find your place, live without limits."
        />
      </Helmet>

      <main className="bg-white overflow-hidden">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>

        {/* Property Showcase */}
        <section>
          <PropertyShowcase />
        </section>

        {/* Property Features (scroll target for Discover More) */}
        <section id="property-features">
          <PropertyFeatures />
        </section>

        {/* Call To Action */}
        <section>
          <CallToAction />
        </section>

        {/* Property Types */}
        <section>
          <PropertyTypes />
        </section>

        {/* Property Discovery */}
        <section>
          <PropertyDiscovery />
        </section>

        {/* Testimonials */}
        <section>
          <TestimonialSection />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
