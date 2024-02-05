import React from "react";
import contactImage from "../../assets/contact.png";
import email from "../../assets/email.png";
import contactFooter from "../../assets/contactFooter.png";
import "../../styles/ContactMe.scss";

const ContactMe = () => {
  return (
    <section className="contact__me__section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={contactImage} alt="" />
          </div>
          <div className="col-m-12 text-center mt-5">
            <h5 className="gray__color">
              Empower Your Projects with Precision Code
            </h5>
            <h1 className="text-white fw-bold mt-3">
              Reach Out for Expert Development Solutions!
            </h1>
            <h5 className="dark__green__color mt-4">
              <img src={email} alt="email" className="img-fluid mx-1" />
              suchitraswain.2012@gmail.com
            </h5>
          </div>
          <div className="col-md-12 contact__footer">
            <img
              src={contactFooter}
              alt=""
              className="img-fluid w-75 d-block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
