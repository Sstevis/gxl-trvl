import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import TrainingPics from "../components/TrainingPics";

const Training = () => {
  return (
    <>
      <Navbar />
      {/* <Video /> */}
      <HeroImage heading="TRAINING" text="Pre-Flight & In-Flight Training" />
      <TrainingPics />
      <Footer />
    </>
  );
};

export default Training;
