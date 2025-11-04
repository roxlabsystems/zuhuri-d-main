import React, { useState } from "react";

const PropertyGrid = ({ filters, filterFn }) => {
  //Property data with support for multiple images
  const allProperties = [
    {
      id: 1,
      images: [
        "/images/IMG_1013_Original.png",
        "/images/IMG_1023_Original 1.png",
        
      ],
      title: "Kitengela Plots",
      description:
        "50x100 Plots for sale — Own your piece of Kitengela. Secure a prime plot in a fast-growing area with excellent infrastructure and unbeatable value.",
      price: "KES 1,500,000 per acre",
      location: "Kitengela, Kajiado",
      type: "Land",
    },
    {
      id: 2,
      images: ["/images/img_img_1118_1.png"],
      title: "Juja Plots",
      description:
        "Prime 50x100 plots for sale along Juja Gatundu Road. Ideal for residential or investment purposes in a rapidly developing area.",
      price: "KES 2,000,000 per plot",
      location: "Juja, Kiambu",
      type: "Land",
    },
    {
      id: 3,
      images: [
        "/images/properties/ukundaplot1.jpeg",
        "/images/properties/ukundaplot2.jpeg",
        "/images/properties/ukundaplot3.jpeg",
      ],
      title: "Ukunda 5 Acres Land",
      description:
        "5 Acres of prime land for sale in Mbuwani, Ukunda — only 1.1M per acre. Close to Diani Beach, suitable for residential, commercial, or agricultural use.",
      price: "KES 1,100,000 per acre",
      location: "Ukunda, Kwale",
      type: "Land",
    },
    {
      id: 4,
      images: [
        "/images/properties/kitengelarent1.jpeg",
        "/images/properties/kitengelarent2.jpeg",
        "/images/properties/kitengelarent3.jpeg",
        "/images/properties/kitengelarent4.jpeg",
        "/images/properties/kitengelarent5.jpeg",
        "/images/properties/kitengelarent6.jpeg",
      ],
      title: "3 Bedroom Furnished Apartment – Kitengela",
      description:
        "Beautifully designed furnished apartment with modern finishes, located in a serene neighborhood. Perfect for family living with access to schools, shops, and transport.",
      price: "KES 180,000 per month",
      location: "Kitengela, Kajiado",
      type: "Apartment",
    },
    {
      id: 5,
      images: [
        "/images/properties/nyarirent1.jpg",
        "/images/properties/nyarirent2.jpg",
        "/images/properties/nyarirent3.jpg",
        "/images/properties/nyarirent4.jpg",
        "/images/properties/nyarirent5.jpg",
        "/images/properties/nyarirent6.jpg",
        "/images/properties/nyarirent7.jpg",
        "/images/properties/nyarirent8.jpg",
        "/images/properties/nyarirent9.jpg",
        "/images/properties/nyarirent10.jpg",
      ],
      title: "Nyari 2 Bedroom Apartment for Rent",
      description:
        "Experience luxury living in the secure Nyari community. Spacious interiors, modern amenities, and easy access to Nairobi’s top hubs.",
      price: "KES 170,000 per month",
      location: "Nyari, Nairobi",
      type: "Apartment",
    },
    {
      id: 6,
      images: [
        "/images/properties/kileleshwasale1.jpg",
        "/images/properties/kileleshwasale2.jpg",
        "/images/properties/kileleshwasale3.jpg",
        "/images/properties/kileleshwasale4.jpg",
        "/images/properties/kileleshwasale5.jpg",
        "/images/properties/kileleshwasale6.jpg",
        "/images/properties/kileleshwasale7.jpg",
        "/images/properties/kileleshwasale8.jpg",
        "/images/properties/kileleshwasale9.jpg",
        "/images/properties/kileleshwasale10.jpg",
      ],
      title: "Kileleshwa Apartments for Sale",
      description:
        "2 & 3 bedroom luxury apartments starting at 8.9M. Amenities include gym, heated pool, rooftop garden, CCTV, generator, and modern kitchens.",
      price: "From KES 8,900,000",
      location: "Kileleshwa, Nairobi",
      type: "Apartment",
    },
  ];

   const filteredProperties = filterFn(allProperties);

  const [currentIndexes, setCurrentIndexes] = useState({});
  const nextImage = (id, total) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] + 1 || 1) % total,
    }));
  };
  const prevImage = (id, total) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + total) % total,
    }));
  };

  //Smart contact logic
  const handleContact = () => {
    const phone = "tel:+254796370788"; 
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = phone;        //Opens phone dialer
    } else {
      window.location.href = "/contact";   //Goes to contact page
    }
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-[1226px] mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No properties match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProperties.map((property) => {
              const total = property.images.length;
              const index = currentIndexes[property.id] || 0;
              return (
                <div
                  key={property.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <img
                      src={property.images[index]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-all duration-500"
                      loading="lazy"
                    />
                    {total > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(property.id, total)}
                          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#00000080] hover:bg-[#000000a0] text-white w-8 h-8 rounded-full flex items-center justify-center"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => nextImage(property.id, total)}
                          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#00000080] hover:bg-[#000000a0] text-white w-8 h-8 rounded-full flex items-center justify-center"
                        >
                          ›
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {property.images.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === index ? "bg-white" : "bg-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-5 bg-gray-50 border-t border-gray-200 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e1b54] mb-1">
                        {property.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {property.location}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {property.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <p className="text-[#1e1b54] font-bold mb-3">
                        {property.price}
                      </p>

                      {/*Updated Button */}
                      <button
                        onClick={handleContact}
                        className="w-full bg-[#1e1b54] text-white text-sm font-semibold py-2 px-4 rounded hover:bg-[#2b2880] transition"
                      >
                        Contact Agent
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/254796370788"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* WhatsApp icon path*/}
          </svg>
        </a>
      </div>
    </section>
  );
};

export default PropertyGrid;
