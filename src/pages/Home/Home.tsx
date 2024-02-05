import React from "react";
import AboutMe from "./AboutMe";
import Publication from "./Publication";
import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Project from "./Project";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Project />
      <Publication />
      <ContactMe />
    </>
  );
};

export default Home;
