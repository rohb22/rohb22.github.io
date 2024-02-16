import React from "react"
import linkedinIcon from "../assets/icons/linkedin.svg"
import githubIcon from "../assets/icons/github.svg"


export default function Contacts() {
    return (
        <div id="contact-div">
            <h3>Contacts</h3>
            <p>Email me directly at <u>rohbpaloma@gmail.com</u> or fill up this form!</p>
            <form id="contact-form">
                <label htmlFor="sender">Your Email:</label>
                <input type="email" id="sender" required/>
                <br/>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required></textarea>
                <br/>
                <input id="sbmt" type="submit" value="Send Email"/>
        </form>
        <div id="contact-icons">
            <a target="_blank" href="https://github.com/rohb22"><img src={githubIcon} alt="My github profile" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/rohb22/"><img src={linkedinIcon} alt="My linkedin profile" /></a>
        </div>
    </div>
    )
}