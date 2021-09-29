import React from "react";
import "./Contact.css";
import contact from "../../images/contact.jpg";

const Contact = () => {
  return (
    <>
        <h1>Contact Us</h1>
      <div className="home-page">
        <div className="homepage-right">
          <img src={contact} alt="" />
        </div>
        <div className="homepage-left">
          <form action="">
            <input type="text" placeholder="Type your name" />
            <input type="text" placeholder="Subject" />
            <input type="email" placeholder="Give your Email Address" />
            <textarea name="" id="" cols="30" rows="10"
            placeholder="Write to us..."></textarea>
            <div>
            <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
