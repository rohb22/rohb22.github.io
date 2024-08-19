import React from "react";
import skillsdb from "../skills.json";
import './styles/Skills.scss'

function Skill({ icon, name }) {
    return (
        <div className="icon-container">
            <img src={icon} alt={`${name} icon`} />
            <p className="icons-name">{name}</p>
        </div>
    );
}

export default function Skills() {
    return (
        <div id="skills-container">
            <h1>My Tech Stack</h1>
            <div id="skills">
                {skillsdb.skills.map((item, i) => (
                    <Skill icon={item.path} name={item.name} key={i} />
                ))}
            </div>
        </div>
    );
}
