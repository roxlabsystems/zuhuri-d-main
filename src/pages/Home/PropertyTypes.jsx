import React, { useState } from 'react';
import './propertytypes.css';

const PropertyTypes = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Land & Plots',
      description:
        'Secure affordable and premium plots in prime or high-growth areas, ready for development or long-term investment.',
      imgSrc: '/images/img_img_1013_original_342x342.png',
      imgAlt: 'Land and plots showcase',
    },
    {
      title: 'Homes',
      description:
        'From modern townhouses to cozy family homes, find move-in ready properties built for comfort and lasting value.',
      imgSrc: '/images/img_home_1014_original_342x342.png',
      imgAlt: 'Homes showcase',
    },
    {
      title: 'Commercial Spaces',
      description:
        'High-potential offices, shops, and mixed-use spaces in strategic locations to grow your business or rental income.',
      imgSrc: '/images/img_commercial_1015_original_342x342.png',
      imgAlt: 'Commercial spaces showcase',
    },
  ];

  return (
    <section className="propertydiscovery-container">
      <div className="propertydiscovery-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="propertydiscovery-tab"
            onClick={() => setActiveTab(index)}
          >
            <div className="propertydiscovery-divider">
              {activeTab === index && <div className="propertydiscovery-active"></div>}
            </div>
            <div className="propertydiscovery-content">
              <h2>{tab.title}</h2>
              <span>{tab.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="propertydiscovery-image-container">
        <img
          src={tabs[activeTab].imgSrc}
          alt={tabs[activeTab].imgAlt}
          className="propertydiscovery-image1"
        />
      </div>
    </section>
  );
};

export default PropertyTypes;
