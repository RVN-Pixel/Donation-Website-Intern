import React from "react";
import "./ContactForm.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import location_icon from "../../Assets/location-icon.png";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a msg <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            pritam.das@gspann.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            9560478245
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Whisk Software Pvt. Ltd., Cambridge,
            <br />
            N-heights Builidng, Hyderbad, Cybercity, 500081
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <section className="form-box">
          <legend>Feedback Form</legend>
          <form>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label> Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label> Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <div className="submit-button">
              <button type="submit" className="btn dark-btn">
                Submit Now
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
