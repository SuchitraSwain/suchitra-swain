import React from "react";
import "../../styles/Contact.scss";
import ContactCard from "./ContactCard";
import BookingCard from "../../components/BookingCard";

const Contact = () => {

  return (
    <section className="contact__section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-white text-md-start text-center">Contact Me</h3>
          </div>
        </div>
        
        {/* Booking Section */}
        <div className="row">
          <div className="col-md-12">
            <BookingCard />
          </div>
        </div>

        {/* Contact Information */}
        <div className="row">
          <div className="col-md-12">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
