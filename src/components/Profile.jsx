import React from "react";
import Photo from "../assets/profile.png";
export default function Profile() {
    return (
        <div id="profile-container">
            <img src={Photo} id="profilephoto"/>
            <h2>I'm <span id="profilename">Rohb,</span></h2>
            <p>A Computer Engineering</p>
            <p>Student</p>
        </div>
    )
}