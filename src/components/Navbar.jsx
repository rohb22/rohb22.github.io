import React from "react";

export default function Navbar() {
    return(
        <div id="navbar">
            <ul id="navbar-items">
                <li className="navbar-item"><a href="#about-container">About</a></li>
                <li className="navbar-item">Projects</li>
                <li className="navbar-item">Contact</li>
            </ul>
        </div>
    )
}