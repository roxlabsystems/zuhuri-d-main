import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/properties");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full flex justify-center items-center py-24 bg-transparent overflow-visible mb-40">
      {/* Background tilted layers */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1300px] h-[350px] bg-[#1e1b54] rotate-[-2.27deg] shadow-lg"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[12px] w-[1300px] h-[350px] bg-[#1e1b54]/40"></div>

      {/* Foreground content (straight) */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Text */}
        <div className="text-left max-w-[600px]">
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontFamily: "League Spartan",
              fontSize: "32px",
              lineHeight: "29px",
            }}
          >
            Find Your Dream Property Today
          </h2>

          <p
            className="text-white font-normal leading-relaxed"
            style={{
              fontFamily: "League Spartan",
              fontSize: "24px",
              lineHeight: "22px",
            }}
          >
            Explore our wide range of lands and houses to find the perfect
            property for you.
          </p>
        </div>

        {/* Right Button (arrow removed) */}
        <div className="flex items-center">
          <div onClick={handleSearchClick}>
            <Button
              text="Search Properties"
              text_font_size="24"
              text_font_family="League Spartan"
              text_font_weight="600"
              text_line_height="22px"
              text_text_align="center"
              text_color="#1e1b54"
              fill_background_color="#ffffff"
              border_border_radius="0px"
              padding="10px 32px"
              className="cursor-pointer hover:opacity-90 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
