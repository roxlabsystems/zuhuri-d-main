import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import "./index.css";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Services - Land Sales, Rentals & Property Management | Zuhuri Real Estate
        </title>
        <meta
          name="description"
          content="Discover Zuhuri Real Estate's comprehensive services: secure land sales, property rentals, professional management, and specialized diaspora investment solutions in Kenya."
        />
        <meta
          property="og:title"
          content="Our Services - Land Sales, Rentals & Property Management | Zuhuri Real Estate"
        />
        <meta
          property="og:description"
          content="Discover Zuhuri Real Estate's comprehensive services: secure land sales, property rentals, professional management, and specialized diaspora investment solutions in Kenya."
        />
      </Helmet>

      <div className="w-full bg-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="w-full bg-white pt-[60px] md:pt-[80px] lg:pt-[92px]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1
                className="text-primary-background"
                style={{
                  fontSize: "44px",
                  fontFamily: "League Spartan",
                  fontWeight: "800",
                  lineHeight: "38px",
                }}
              >
                Our Services
              </h1>

              <p
                className="text-black mt-[20px]"
                style={{
                  fontSize: "20px",
                  fontFamily: "League Spartan",
                  fontWeight: "300",
                  lineHeight: "28px",
                }}
              >
                Our best offering to meet your needs
              </p>
            </div>
          </section>

          {/* Services Card Section */}
          <section className="services-section mt-[100px]">
            <div className="services-bg-back"></div>
            <div className="services-bg-front"></div>

            <div className="services-content">
              <h2>Land Sales</h2>
              <p>
                We specialize in secure and verified land transactions, helping you find
                the perfect plot for your dream home or investment. Our team ensures all
                land is legally verified and ready for transfer, giving you peace of mind
                with every purchase.
              </p>

              <h2>Rentals</h2>
              <p>
                From residential apartments to commercial spaces, we connect tenants
                with properties that match their needs and budget. We make the rental
                process smooth and transparent for both landlords and tenants.
              </p>

              <h2>Property Management</h2>
              <p>
                Our property management service takes care of everything from tenant
                screening and rent collection to maintenance and inspections. We help
                property owners protect and grow their investments without the stress.
              </p>

              <h2>Diaspora Services</h2>
              <p>
                We assist clients living abroad to invest in property back home with
                confidence. From property selection and verification to secure payment
                processes and regular updates, we ensure your investment is safe, legal,
                and hassle-free.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;
