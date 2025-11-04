import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PropertyDiscovery.css";

const PropertyDiscovery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="property-section">
      <div className="property-container">
        {/* Left Content */}
        <div className="property-header" data-aos="fade-right">
          <h2 className="property-title">Discover Your Next Property</h2>
          <p className="property-subtext">
            Explore our wide range of lands and houses to find the perfect
            property for you.
          </p>
          <div className="property-button-wrap">
            <button className="property-btn">View Properties</button>
          </div>
        </div>

        {/* Right Content (Animated Cards) */}
        <div className="property-cards" data-aos="fade-left">
          <div className="property-card accent1" style={{ transform: "rotate(-2deg)" }}>
            <h3 className="property-card-title">Land & Plots</h3>
            <p className="property-card-desc">
              Affordable and premium plots in fast-growing areas, ready for
              development or long-term investment.
            </p>
            <span className="property-card-num">01</span>
          </div>

          <div className="property-card accent2" style={{ transform: "rotate(2deg)" }}>
            <h3 className="property-card-title">Homes</h3>
            <p className="property-card-desc">
              Modern townhouses, apartments, and family homes in secure,
              well-connected neighborhoods.
            </p>
            <span className="property-card-num">02</span>
          </div>

          <div className="property-card accent1" style={{ transform: "rotate(-2deg)" }}>
            <h3 className="property-card-title">Commercial</h3>
            <p className="property-card-desc">
              Strategic business locations offering strong rental yields and
              growth potential.
            </p>
            <span className="property-card-num">03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDiscovery;
