import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Why from "../../components/Why/Why";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="w-full flex justify-center items-center">
        <Hero />
      </div>
      <div className="w-full flex justify-center items-center">
        <HowItWorks />
      </div>
      <div className="w-full flex justify-center items-center">
        <Why />
      </div>
      <AboutUs />
      <div className="w-full flex justify-center items-center">
        <Testimonial />
      </div>
      <div className="w-full flex justify-center items-center">
        <Footer />
      </div>
    </>
  );
}
