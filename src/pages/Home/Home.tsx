import React from "react";
import AboutMe from "./AboutMe";
import Publication from "./Publication";
import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Skills from "../Skills/Skills";
import Project from "./Project";
import GitHubContributions from "../GitHubContributions/GitHubContributions";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Project />
      <GitHubContributions />
      <Publication />
      <ContactMe />
    </>
  );
};

export default Home;
