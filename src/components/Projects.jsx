import React from "react"
import projectsdb from "../projects.json"
import "./styles/Profile.scss"


function Project({photo, name, githubLink, siteLink}) {

    return (
        <div className="project">
            <img className="project-ss" src={photo} alt="Screenshot of the project" />
            <h4>{name}</h4>
            <a target="_blank" href={githubLink}>View Repository</a>
            {(siteLink != null) && (<a target="_blank"  href={siteLink}>View Site</a>)}
        </div>
    )
}

export default function Projects() {
    return (
        <div id="projects-container">
            <h3>Projects</h3>
            <div id="projects">
                {projectsdb.projects.map((item, i) => (
                    <Project photo={item.photo} name={item.name} githubLink={item.repoLink} siteLink={item.siteLink} key={i} />
                ))}
            </div>
        </div>
    )
}