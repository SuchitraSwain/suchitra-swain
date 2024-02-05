import React from "react";
import suchitra from "../../assets/suchitra.png";
import "../../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about__me" id="about_me">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">Get To Know Me More</h1>
          </div>
        </div>
        <div className="row mt-5 pt-5 d-flex flex-row align-items-center">
          <div className="col-md-4">
            <img src={suchitra} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-md-8 mt-md-0 mt-5">
            <h3 className="dark__green__color fw-bold">
              Application Developer
            </h3>
            <p className="gray__color mt-3">
              As a versatile software developer, I bring over five years of
              extensive experience in both front-end and back-end development,
              with a deep specialization in JavaScript and a keen eye for UI/UX
              design. My commitment to continuous learning and passion for
              tackling meaningful challenges has led me to work on a wide array
              of projects, allowing me to thrive in diverse and dynamic
              environments. My ability to rapidly acquire new skills enables me
              to juggle multiple projects and roles effortlessly, making me a
              valuable asset in any tech team.
            </p>
            <p className="gray__color mt-3">
              My technical proficiency spans a comprehensive range of tools and
              frameworks, including ReactJs, NextJs, Angular, and Node.js,
              alongside expertise in testing frameworks like Jest and Cypress,
              and integration tools such as Jenkins. This diverse skill set,
              rooted in JavaScript, empowers me to deliver robust software
              solutions that seamlessly integrate front-end aesthetics with
              back-end functionality.
            </p>
            <p className="gray__color mt-3">
              Adaptability is at the core of my professional ethos, allowing me
              to seamlessly transition between technologies and programming
              languages as required. Whether setting up infrastructure or
              developing client-facing interfaces, my comprehensive approach
              ensures that I deliver high-quality, end-to-end software solutions
              that meet and exceed project requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
