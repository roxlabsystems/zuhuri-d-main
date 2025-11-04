import React from "react";
import "./PropertyShowcase.css"; // make sure this file contains your scroll CSS

const PropertyShowcase = () => {
  const topRowImages = [
    { src: "/images/img_img_1013_original_342x342.png", width: "342px", height: "342px" },
    { src: "/images/img_img_1122_1.png", width: "564px", height: "342px" },
    { src: "/images/img_img_0267_1.png", width: "526px", height: "340px" }
  ];

  const bottomRowImages = [
    { src: "/images/img_img_0095_1.png", width: "214px", height: "340px" },
    { src: "/images/img_img_0264_1.png", width: "428px", height: "344px" },
    { src: "/images/img_img_1118_1.png", width: "258px", height: "344px" },
    { src: "/images/img_img_0267_1_340x526.png", width: "526px", height: "340px" }
  ];

  return (
    <section className="w-full bg-background-main py-8">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Top Scrolling Row (Right to Left) */}
        <div className="scroll-row">
          <div className="scroll-content">
            {[...topRowImages, ...topRowImages].map((image, index) => (
              <img
                key={`top-${index}`}
                src={image.src}
                alt={`Property showcase top ${index + 1}`}
                style={{
                  width: image.width,
                  height: image.height,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Scrolling Row (Left to Right) */}
        <div className="scroll-row scroll-right">
          <div className="scroll-content">
            {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
              <img
                key={`bottom-${index}`}
                src={image.src}
                alt={`Property showcase bottom ${index + 1}`}
                style={{
                  width: image.width,
                  height: image.height,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
