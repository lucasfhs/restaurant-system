import React from "react";


import Header from "../../components/Header";


import Footer from "../../components/Footer";
import Hero from "./sessions/Hero";
import About from "./sessions/About";
import SampleMenu from "./sessions/SampleMenu";
import Testimonials from "./sessions/Testimonials";


const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <Hero />
      <About />
      <SampleMenu />
      <Testimonials />

      <Footer />

      {/* Social Icons */}
      {/* <div className="bg-gray-500 w-full bottom-4 flex justify-center gap-4 p-4 xl:mx-auto">
        <a
          href="https://www.instagram.com"
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          <Instagram size={32} />
        </a>
        <a
          href="https://www.facebook.com"
          className="text-white hover:text-blue-600 transition duration-300"
        >
          <Facebook size={32} />
        </a>
        <a
          href="https://www.twitter.com"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          <Twitter size={32} />
        </a>
      </div> */}
    </div>
  );
};

export default LandingPage;
