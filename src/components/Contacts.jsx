import React, { useEffect, useState } from "react";


export default function Contacts() {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");



  const sendEmail = async (sender, message) => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender, message }),
      });
  
      const data = await response.json();
      console.log('Email sent successfully:', data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    sendEmail(sender, message);
    

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
        <input id="sbmt" type="submit" value="Send Email"/>
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
