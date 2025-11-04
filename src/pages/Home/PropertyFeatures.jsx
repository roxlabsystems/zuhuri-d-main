import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './propertyfeatures.css'

const PropertyFeatures = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* Existing Section */}
      <section className="propertydiscovery-container">
        {/* Image Section */}
        <div className="propertydiscovery-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="propertydiscovery-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="propertydiscovery-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="propertydiscovery-image3 thq-img-ratio-16-9"
            />
          )}
        </div>

        {/* Tabs Section */}
        <div className="propertydiscovery-tabs">
          <div
            className="propertydiscovery-tab"
            onClick={() => setActiveTab(0)}
          >
            <div className="propertydiscovery-divider">
              {activeTab === 0 && (
                <div className="propertydiscovery-active"></div>
              )}
            </div>
            <div className="propertydiscovery-content">
              <h2 className="feature-title">{props.feature1Title}</h2>
              <span className="feature-description">{props.feature1Description}</span>
            </div>
          </div>

          <div
            className="propertydiscovery-tab"
            onClick={() => setActiveTab(1)}
          >
            <div className="propertydiscovery-divider">
              {activeTab === 1 && (
                <div className="propertydiscovery-active"></div>
              )}
            </div>
            <div className="propertydiscovery-content">
              <h2 className="feature-title">{props.feature2Title}</h2>
              <span className="feature-description">{props.feature2Description}</span>
            </div>
          </div>

          <div
            className="propertydiscovery-tab"
            onClick={() => setActiveTab(2)}
          >
            <div className="propertydiscovery-divider">
              {activeTab === 2 && (
                <div className="propertydiscovery-active"></div>
              )}
            </div>
            <div className="propertydiscovery-content">
              <h2 className="feature-title">{props.feature3Title}</h2>
              <span className="feature-description">{props.feature3Description}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

PropertyFeatures.defaultProps = {
  feature1Title: 'Houses for Sale',
  feature1Description: 'Discover stunning houses ready for you to move in',
  feature2Title: 'Prime Locations',
  feature2Description: 'Find the perfect location for your new home',
  feature3Title: 'Land Options',
  feature3Description: 'Explore a variety of land options for your dream home',

  feature1ImgSrc: '/images/img_photo_2025_06_13_15_16_18.png',
  feature2ImgSrc: '/images/img_img1013original.png',
  feature3ImgSrc: '/images/img_zuhuri_land.png',

  feature1ImgAlt: 'Zuhuri houses for sale',
  feature2ImgAlt: 'Prime locations for Zuhuri properties',
  feature3ImgAlt: 'Zuhuri land options',
}

PropertyFeatures.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default PropertyFeatures
