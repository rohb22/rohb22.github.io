import React from "react";
import "./styles/Profile.scss";

export default function Profile() {
    return (
        <div id="profile-container">
            <div id="profile-content">
                <p>I'm <span className="txt-accent title">Rohb</span>,<br/> A <span className="txt-accent">Computer Engineering</span> Student</p>
            </div>
        </div>
    )
}