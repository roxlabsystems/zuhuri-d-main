import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Diaspora', path: '/diaspora-investment' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '/images/img_instagram_1.png', url: 'https://instagram.com/zuhurirealestate' },
    { name: 'Facebook', icon: '/images/img_facebook_1.png', url: 'https://facebook.com/zuhurirealestate' },
    { name: 'TikTok', icon: '/images/img_tik_tok_1.png', url: 'https://tiktok.com/@zuhurirealestate' },
    { name: 'YouTube', icon: '/images/img_youtube_1.png', url: 'https://youtube.com/@zuhurirealestate' },
  ];

  return (
    <footer
      className="w-full bg-primary-dark mt-[60px] md:mt-[80px] relative"
      style={{
        backgroundImage: "url('/images/img_img1013original.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark opacity-85"></div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">

          {/* CTA */}
          <div className="space-y-1">
            <p
              className="text-white"
              style={{
                fontSize: '12px',
                fontFamily: 'League Spartan',
                fontWeight: '300',
                lineHeight: '12px',
              }}
            >
              Are You Interested?
            </p>
            <Link
              to="/contact"
              className="inline-block text-white hover:text-secondary-background transition-colors duration-200"
              style={{
                fontSize: '16px',
                fontFamily: 'League Spartan',
                fontWeight: '700',
                lineHeight: '16px',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            {/* Phone */}
            <div className="flex items-center gap-1.5">
              <img src="/images/img_phone_icon.png" alt="Phone" className="w-[12px] h-[16px]" />
              <a
                href="tel:+254796370788"
                className="text-white hover:text-secondary-background transition-colors duration-200"
                style={{
                  fontSize: '12px',
                  fontFamily: 'League Spartan',
                  fontWeight: '400',
                  lineHeight: '12px',
                }}
              >
                +254 796 370 788
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1.5">
              <img src="/images/img_email_icon.png" alt="Email" className="w-[12px] h-[16px]" />
              <a
                href="mailto:zuhurirealestate@gmail.com"
                className="text-white hover:text-secondary-background transition-colors duration-200"
                style={{
                  fontSize: '12px',
                  fontFamily: 'League Spartan',
                  fontWeight: '400',
                  lineHeight: '12px',
                }}
              >
                zuhurirealestate@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5">
              <img src="/images/img_location_icon.png" alt="Location" className="w-[12px] h-[16px]" />
              <span
                className="text-white"
                style={{
                  fontSize: '12px',
                  fontFamily: 'League Spartan',
                  fontWeight: '400',
                  lineHeight: '12px',
                }}
              >
                Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className="pt-2">
            <Link to="/" aria-label="Zuhuri Real Estate Home">
              <img
                src="/images/img_footer_logo.png"
                alt="Zuhuri Real Estate Logo"
                className="w-[60px] h-[24px] md:w-[70px] md:h-[28px] hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="pt-1">
            <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white hover:text-secondary-background transition-colors duration-200"
                    style={{
                      fontSize: '12px',
                      fontFamily: 'League Spartan',
                      fontWeight: '400',
                      lineHeight: '12px',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2 pt-1 pb-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label={`Follow us on ${social.name}`}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
