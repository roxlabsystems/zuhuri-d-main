import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import PropertiesPage from './pages/Properties';
import ServicesPage from './pages/Services';
import DiasporaInvestmentPage from './pages/DiasporaInvestment';
import Blog from "./pages/Blog/Blog";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/diaspora-investment" element={<DiasporaInvestmentPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;