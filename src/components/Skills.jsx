import React from "react"
import skillsdb from "../skills.json"

function Skill({icon, name}) {
    return (
        <div className="icon-container">
            <img className="icons" src={require(icon)} alt={`${name} icon`} />
            <p className="icons-name">{name}</p>
        </div>
    )
}


export default function Skills() {
    
    return (
        <div id="skills-container">
            <h3>My Tech Stack</h3>
            <div id="skills">
                {skillsdb.skills.map((item, i) => (
                    <Skill icon={item.path} name={item.name} key={i}/>
                ))}
            </div>
        </div>
    )
}