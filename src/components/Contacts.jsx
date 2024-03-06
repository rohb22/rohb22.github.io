import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function Contacts() {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    emailjs.init('iDiPKliQfX-8IcTJa');
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ase424c", "template_67seuzu", {
        from_name: sender,
        message: message,
      })
      .then(
        function (response) {
          alert("Email sent successfully!");
        },
        function (error) {
          alert("Email could not be sent. Please try again later.");
        }
      );

    // Clear the form
    setSender("");
    setMessage("");
  };

  return (
    <div id="contact-div">
      <h3>Contacts</h3>
      <p>
        Email me directly at <u>rohbpaloma@gmail.com</u> or fill up this form!
      </p>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <label htmlFor="sender">Your Email:</label>
        <input
          type="email"
          id="sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          required
          autoComplete="off"
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <br />
        <input id="sbmt" type="submit" value="Send Email" />
      </form>
      <div id="contact-icons">
        <a target="_blank" href="https://github.com/rohb22">
          <img src="/icons/github.svg" alt="My github profile" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/rohb22/">
          <img src="/icons/linkedin.svg" alt="My linkedin profile" />
        </a>
      </div>
    </div>
  );
}
