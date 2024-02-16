import React from "react"
import ayanontimer from "../assets/project-screenshots/ayanontimer.png"

function Project({photo, name, githubLink, siteLink}) {
    return (
        <div className="project">
            <img className="project-ss" src={photo} alt="Screenshot of the project" />
            <h4>{name}</h4>
            <a target="_blank" href={githubLink}>View Repository</a>
            <a target="_blank" href={siteLink}>View Site</a>
        </div>
    )
}

export default function Projects() {
    const ayanontimergithub = "https://github.com/rohb22/ayanontimer";
    const ayanontimersite = "https://ayanontimer.web.app/";
    return (
        <div id="projects-container">
            <h3>Projects</h3>
            <div id="projects">
                <Project photo={ayanontimer} name="Ayanon Timer" githubLink={ayanontimergithub} siteLink={ayanontimersite} />
            </div>
        </div>
    )
}