import React from "react";
import "../styles/MobileNavbar.scss";
import linkedin from "../assets/linkedin.png";
import github from "../assets/githubnav.png";
import behance from "../assets/behanceNav.png";
import insta from "../assets/instaNav.png";

const MobileNavbar = () => {
  return (
    <section className="mobileNav__section d-md-none d-block">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12">
            <p className="gray__secondary__color text-center find-me-title mb-0">Find me in:</p>
          </div>
        </div>
        <div className="row icon-row">
          <div className="col-3">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="img-fluid"
            />
          </div>
          <div className="col-3">
            <img src={github} alt="GitHub" className="img-fluid" />
          </div>
          <div className="col-3">
            <img
              src={behance}
              alt="Behance"
              className="img-fluid"
            />
          </div>
          <div className="col-3">
            <img
              src={insta}
              alt="Instagram"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
