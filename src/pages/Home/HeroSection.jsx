import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  // Scroll to Property Features
  const handleDiscoverMore = () => {
    const section = document.getElementById("property-features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("⚠️ No section found with id='property-features'");
    }
  };

  // Navigate to /properties
  const handleSearchProperties = () => {
    navigate("/properties");
  };

  return (
    <section className="w-full bg-background-main">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center py-8 md:py-12 lg:py-16">
          <div className="w-full max-w-4xl">
            {/* Headline */}
            <h1
              className="text-text-secondary mb-4 md:mb-6"
              style={{
                fontSize: "48px",
                fontFamily: "STIX Two Text",
                fontWeight: "700",
                lineHeight: "1.2",
                textAlign: "left",
              }}
            >
              Find Your Place.
              <br />
              Live Without Limits.
            </h1>

            {/* Description */}
            <p
              className="text-text-primary mb-8 md:mb-12 lg:mb-14"
              style={{
                fontSize: "18px",
                fontFamily: "Noto Sans",
                fontWeight: "300",
                lineHeight: "1.2",
                textAlign: "left",
                marginTop: "24px",
              }}
            >
              We connect you with secure, high-value properties and guide
              <br />
              you every step, making ownership simple and rewarding.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 mt-14">
              {/* Discover More */}
              <div onClick={handleDiscoverMore}>
                <Button
                  text="Discover More"
                  text_font_size="24"
                  text_font_family="League Spartan"
                  text_font_weight="600"
                  text_line_height="23px"
                  text_text_align="left"
                  text_color="#ffffff"
                  fill_background_color="#1e1b54"
                  border_border_radius="22px"
                  padding="8px 34px 8px 14px"
                  className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
