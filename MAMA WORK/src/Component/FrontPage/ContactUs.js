import React from "react";
import Gmail from "../../Assets/images/Vector.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contactus-img">
        <div className="contactus-data">
          <h1>Get In Touch</h1>
          <p>The Ultimate Way to Remove Your Waste</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-data">
          <div className="form-header">
            <h3>Send Us a Message</h3>
            <img src={Gmail} alt="" />
          </div>

          <div className="form">
          <form className="form">
  <div className="form-row">
    <div className="form-group">
      <input
        type="text"
        name="floating_name"
        id="floating_name"
        required
      />
      <label htmlFor="floating_email">Name</label>
    </div>

    <div className="form-group">
      <input
        type="email"
        name="floating_email"
        id="email"
        required
      />
      <label htmlFor="floating_password">Email Address</label>
    </div>

    <div className="form-group">
      <input
        type="number"
        name="number"
        id="number"
        required
      />
      <label htmlFor="floating_repeat_password">Phone Number</label>
    </div>

    <div className="form-group">
      <input
        type="text"
        name="subject"
        id="subject"
        required
      />
      <label htmlFor="floating_first_name">Subject</label>
    </div>
  </div>

  <div className="form-group full-width">
    <input
      type="text"
      name="message"
      id="message"
      required
    />
    <label htmlFor="floating_last_name">Message</label>
  </div>

  <button type="submit">Submit</button>
</form>

          </div>
     
        </div>
        <div className="contact-social">
 <h1>Contact Information</h1>

 <div className="details">
 <img src={Gmail} alt="" className="details-img" />
 <p>ranarajneesh075@gmail.com</p>
 <img src={Gmail} alt="" className="details-img" />
 <p> <pre>P.I.E.T - Panipat Institute</pre>  of Engineering & Technology</p>
 </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
