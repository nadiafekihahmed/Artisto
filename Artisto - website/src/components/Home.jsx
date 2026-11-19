import React from 'react';
import '../App.css';

import HeroSection from './HeroSection';
import Cards from './Cards';
import Customers from './Customers';
import Footer from './Footer';

function Home() {
  return (
    <div className="home-wrapper">
      <HeroSection />
      <Cards />
      <Customers />
      <Footer />
    </div>
  );
}


export default Home;