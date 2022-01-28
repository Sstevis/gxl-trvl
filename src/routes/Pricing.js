import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/Pricing";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading="Pricing." text="Choose your trip" />
      <PricingCards />
      <Footer />
    </>
  );
};

export default Pricing;
