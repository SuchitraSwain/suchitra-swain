import React from "react";
import heroImage from "../../assets/hero.png";
import heroMobileImage from "../../assets/heroMobile.png";
import "../../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center column">
            <div className="first">
              {" "}
              <p className="lightGray__color mb-0">Hi all. I am</p>
              <h1 className="text-white fw-bold">Suchitra Swain</h1>
              <h3 className="blue__color mt-4">Full Stack Developer</h3>
            </div>

            <div className="second">
              {" "}
              {/* Moved 'second' class to the bottom */}
              <p className="mt-5 gray__color">
                // Turning Code Into Creative Solutions
              </p>
              <p className="gray__color">// you can see it on my Github page</p>
              <p className="gray__color">
                <span className="blue__color fw-bold">const</span>{" "}
                <span className="green__color fw-bold">githubLink</span> =
                <span className="orange__color fw-bold">
                  {" "}
                  "https://github.com/example/url"
                </span>
              </p>
              <p className="gray__color">// you can also download my resume</p>
              <p className="gray__color">
                <span className="blue__color fw-bold">const</span>{" "}
                <span className="green__color fw-bold">resume</span> =
                <span className="orange__color fw-bold">
                  {" "}
                  "download_resume"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
