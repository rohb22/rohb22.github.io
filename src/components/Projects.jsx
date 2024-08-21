import React from "react";
import Slider from "react-slick";
import projectsdb from "../projects.json";
import "./styles/Projects.scss";

function Project({ name, description, githubLink }) {
    return (
        <div className="project">
            <h4>{name}</h4>
            <p>{description}</p>
            <a target="_blank" href={githubLink} rel="noreferrer">View Repository</a>
        </div>
    );
}

export default function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div id="projects-container">
            <h1 className="header">Projects</h1>
            <Slider {...settings} id="projects-wrapper">
                {projectsdb.projects.map((item, i) => (
                    <Project
                        key={i}
                        name={item.name}
                        githubLink={item.repoLink}
                        description={item.description}
                    />
                ))}
            </Slider>
        </div>
    );
}
