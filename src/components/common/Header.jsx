import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Diaspora', path: '/diaspora-investment' },
    { label: 'Blog', path: '/blog' },
  ];

  const isActiveLink = (path) => location?.pathname === path;

  return (
    <header className="w-full bg-primary-background shadow-[0px_12px_10px_#0000003f]">
      <div className="w-full max-w-[1440px] mx-auto px-8 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center py-6 md:py-8">
          
          {/* Logo */}
          <div className="flex-shrink-0 ml-4 md:ml-8">
            <Link to="/" aria-label="Zuhuri Real Estate Home">
              <img 
                src="/images/img_header_logo.png" 
                alt="Zuhuri Real Estate Logo" 
                className="w-[95px] h-[36px] sm:w-[105px] sm:h-[40px] md:w-[120px] md:h-[46px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 hover:text-secondary-background ${
                  isActiveLink(item.path)
                    ? 'text-secondary-background font-semibold'
                    : 'text-white'
                }`}
                style={{
                  fontSize: '20px',
                  fontFamily: 'League Spartan',
                  fontWeight: isActiveLink(item.path) ? '600' : '400',
                  lineHeight: '22px',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block mr-6 md:mr-10">
            <Link to="/contact">
              <Button
                text="Contact Us"
                text_font_size="20"
                text_font_family="League Spartan"
                text_font_weight="600"
                text_line_height="21px"
                text_text_align="center"
                text_color="#1e1b54"
                fill_background_color="#f3c225"
                border_border_radius="26px"
                padding="10px 20px"
                className="hover:bg-secondary-background hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-secondary-background transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            menuOpen 
              ? 'max-h-96 opacity-100 pb-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:bg-primary-dark ${
                  isActiveLink(item.path)
                    ? 'text-secondary-background bg-primary-dark font-semibold'
                    : 'text-white'
                }`}
                style={{
                  fontSize: '18px',
                  fontFamily: 'League Spartan',
                  fontWeight: isActiveLink(item.path) ? '600' : '400',
                  lineHeight: '19px',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="pt-4">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Button
                  text="Contact Us"
                  text_font_size="18"
                  text_font_family="League Spartan"
                  text_font_weight="600"
                  text_line_height="19px"
                  text_text_align="center"
                  text_color="#1e1b54"
                  fill_background_color="#f3c225"
                  border_border_radius="26px"
                  padding="10px 20px"
                  className="w-full hover:bg-secondary-background transition-all duration-200"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
