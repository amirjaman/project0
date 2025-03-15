
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import LandingHeader from '../header-footer/LandingHeader';
import './index.css'; // Import the landing page styles

const LandingPage = () => (
  <Layout>
    <SEO title="Landing Page" />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CTASection />
  </Layout>
);

const HeroSection = () => (
  <section className="hero-section">
    <LandingHeader className="headersec" />
    <div className="container">
      <h1>Welcome to Wealth Finovation</h1>
      <p>Your trusted partner in financial innovation and wealth management.</p>
      <Link to="/signup" className="cta-button">Get Started</Link>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="features-section">
    <div className="container">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Smart Investing</h3>
          <p>Automated investment strategies tailored to your goals.</p>
        </div>
        <div className="feature-item">
          <h3>Wealth Management</h3>
          <p>Expert advice to grow and protect your wealth.</p>
        </div>
        <div className="feature-item">
          <h3>Financial Planning</h3>
          <p>Comprehensive plans to secure your financial future.</p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-item">
          <p>"Wealth Finovation has transformed the way I manage my finances. Highly recommended!"</p>
          <p>- Jane Doe</p>
        </div>
        <div className="testimonial-item">
          <p>"The best financial service I've ever used. Their tools are top-notch."</p>
          <p>- John Smith</p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="cta-section">
    <div className="container">
      <h2>Ready to Take Control of Your Financial Future?</h2>
      <Link to="/signup" className="cta-button">Sign Up Now</Link>
    </div>
  </section>
);

export default LandingPage;

export const Head = () => <title>Home Page</title>;
