import React from "react";


import Header from "../../components/Header";


import Footer from "../../components/Footer";
import Hero from "./sessions/Hero";
import About from "./sessions/About";
import SampleMenu from "./sessions/SampleMenu";
import Testimonials from "./sessions/Testimonials";


const LandingPage = () => {
  return (
    <div>
      <Header />

      <Hero />
      <About />
      <SampleMenu />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default LandingPage;
