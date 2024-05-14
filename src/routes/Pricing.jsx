import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage from "../components/HeroImage.jsx"
import PricingCards from "../components/PricingCards.jsx"

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose your trip." />
      <PricingCards />
      <Footer />
    </div>
  );
}

export default Pricing