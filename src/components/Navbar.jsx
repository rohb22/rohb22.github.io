import React from "react";

export default function Navbar() {
    return(
        <div id="navbar">
            <ul id="navbar-items">
                <li className="navbar-item"><a href="#about-container">About</a></li>
                <li className="navbar-item"><a href="#projects-container">Projects</a></li>
                <li className="navbar-item"><a href="#contact-div">Contacts</a></li>
            </ul>
        </div>
    )
}