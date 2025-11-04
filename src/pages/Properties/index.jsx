import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PropertyFilters from "./PropertyFilters";
import PropertyGrid from "./PropertyGrid";

const Properties = () => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    type: "",
  });

  const handleReset = () => {
    setFilters({
      location: "",
      price: "",
      type: "",
    });
  };

  // Filtering Logic
  const filterFn = (properties) => {
    return properties.filter((p) => {
      const matchType =
        !filters.type ||
        p.type.toLowerCase().includes(filters.type.toLowerCase());
      const matchLocation =
        !filters.location ||
        p.location.toLowerCase().includes(filters.location.toLowerCase());

      const numericPrice = parseInt(p.price.replace(/\D/g, "")) || 0;
      const matchPrice =
        !filters.price ||
        (filters.price.toLowerCase().includes("below") && numericPrice < 1000000) ||
        (filters.price.includes("1M") &&
          numericPrice >= 1000000 &&
          numericPrice <= 10000000) ||
        (filters.price.toLowerCase().includes("above") && numericPrice > 10000000);

      return matchType && matchLocation && matchPrice;
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Property Listings - Premium Real Estate in Kenya | Zuhuri Real Estate
        </title>
        <meta
          name="description"
          content="Browse our extensive collection of premium properties in Kenya. Find land plots, residential homes, and commercial spaces with advanced search filters. Your perfect property awaits."
        />
        <meta
          property="og:title"
          content="Property Listings - Premium Real Estate in Kenya | Zuhuri Real Estate"
        />
        <meta
          property="og:description"
          content="Browse our extensive collection of premium properties in Kenya. Find land plots, residential homes, and commercial spaces with advanced search filters. Your perfect property awaits."
        />
      </Helmet>

      <main className="min-h-screen bg-background-main">
        {/* Hero Section with Background Image */}
        <section
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[792px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/img_whatsapp_image_20250924_at_1548378ba25621_1.png')",
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-primary-background opacity-60"></div>

          {/* Header */}
          <div className="relative z-10">
            <Header />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 mb-8 md:mb-12">
              <h1
                className="text-white font-extrabold leading-tight"
                style={{
                  fontSize: "48px",
                  fontFamily: "League Spartan",
                  fontWeight: "800",
                  lineHeight: "45px",
                }}
              >
                Property Listings
              </h1>
              <p
                className="text-white font-medium"
                style={{
                  fontSize: "24px",
                  fontFamily: "League Spartan",
                  fontWeight: "500",
                  lineHeight: "23px",
                }}
              >
                Find Your Perfect Dream Property
              </p>
            </div>

            {/* Filters Section */}
            <PropertyFilters
              filters={filters}
              onChange={setFilters}
              onReset={handleReset}
            />
          </div>
        </section>

        {/* Property Grid Section */}
        <div className="py-12 md:py-16 lg:py-20 bg-white">
          <PropertyGrid filters={filters} filterFn={filterFn} />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Properties;
