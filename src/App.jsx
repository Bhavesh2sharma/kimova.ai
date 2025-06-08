import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import FeatureBoxes from './components/FeatureBoxes';
import Workflow from './components/Workflow';
import FAQ  from './components/FAQ';
import HeroSection  from './components/HeroSection';
import WelcomeHero  from './components/WelcomeHero';
import ComplianceComparison from './components/ComplianceComparison'; 
import AIAgent from './components/AIAgent'; 
import CoFounders from './components/CoFounders';


function App() {
  return (
    <div>
      <Header />
      <WelcomeHero />
      <HeroSection />
      <CoFounders />
      <FeatureBoxes />
      <Workflow />
      <ComplianceComparison />
      <AIAgent />
      <FAQ />
      <Footer />
      
    </div>
  );
}

export default App;
