import React from "react"
import PyhtonIcon from "../assets/icons/python.svg"
import CppIcon from "../assets/icons/cpp.svg"
import CIcon from "../assets/icons/c.svg"
import ReactIcon from "../assets/icons/react.svg"
import JavaIcon from "../assets/icons/java.svg"
import JsIcon from "../assets/icons/javascript.svg"
import HtmlIcon from "../assets/icons/html5.svg"
import CssIcon from "../assets/icons/css3.svg"
import GitIcon from "../assets/icons/git.svg"

function Skill({icon, name}) {
    return (
        <div className="icon-container">
            <img className="icons" src={icon} alt={`${name} icon`} />
            <p className="icons-name">{name}</p>
        </div>
    )
}


export default function Skills() {
    return (
        <div id="skills-container">
            <h3>My Tech Stack</h3>
            <div id="skills">
                <Skill icon={PyhtonIcon} name="Python"/>
                <Skill icon={CppIcon} name="C++"/>
                <Skill icon={CIcon} name="C"/>
                <Skill icon={JavaIcon} name="Java"/>
                <Skill icon={ReactIcon} name="React"/>
                <Skill icon={HtmlIcon} name="Html"/>
                <Skill icon={CssIcon} name="Css"/>
                <Skill icon={JsIcon} name="Javascript"/>
                <Skill icon={GitIcon} name="Git/Github"/>                
            </div>
        </div>
    )
}