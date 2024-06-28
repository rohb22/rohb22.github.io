import React from "react"
import projectsdb from "../projects.json"


function Project({photo, name, githubLink, siteLink}) {
    if(siteLink[0]){
        
    }
    return (
        <div className="project">
            <img className="project-ss" src={photo} alt="Screenshot of the project" />
            <h4>{name}</h4>
            <a target="_blank" href={githubLink}>View Repository</a>
            <a target="_blank" style={siteLink[0] ? {pointerEvents: "none", cursor:"default"}: {}} href={siteLink[1]}>View Site</a>
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