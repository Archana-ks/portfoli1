import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akrc34k',
     'template_q7v8fme', 
     form.current, 'Rs1RR2nWUZpHI5tca')
      .then((result) => {
          console.log(result.text);
         }, (error) => {
          console.log(error.text);
    });
   };

  return (
    
    <div className="contact-page">
      <h1> Contact Me  </h1>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
      <br/>
      <div className="footer-contact">
        <p>&#169; Archana. All right reserved</p>
        </div>
    </div>
  );
};
export default Contact;
