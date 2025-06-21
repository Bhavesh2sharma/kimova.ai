import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import FeatureBoxes from './components/FeatureBoxes';
import Workflow from './components/Workflow';
import FAQ from './components/FAQ';
import HeroSection from './components/HeroSection';
import WelcomeHero from './components/WelcomeHero';
import ComplianceComparison from './components/ComplianceComparison'; 
import AIAgent from './components/AIAgent';
import AboutUs from './Pages/AboutUs';
import ContactUs from './pages/ContactUs';

function HomePage() {
  return (
    <>
      <WelcomeHero />
      <HeroSection />
      <FeatureBoxes />
      <Workflow />
      <ComplianceComparison />
      <AIAgent />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;