import React from "react";
import "./projects.css";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";


const Projects = () => {
  return (
    <div>
         <div className="project-head">
           <h1>
             My Projects
               </h1>
            </div>
      <div className="project-page">
        <div className="project-content">
          <h1>ECommerce Cart</h1>
          <img src={project1} alt="project-name" />
          <h3>Representing frontend cart design</h3>
          <div className="btn-group">
            <a
              href={"https://github.com/Archana-ks/day23--1"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Code
            </a>

            <a
              href={"https://courageous-cassata-1cc36d.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
         
          </div>
        </div>
        <div className="project-content">
          <h1>Employee Management</h1>
          <img src={project2} alt="project-name" />
          <h3>Managing employee details</h3>
          <div className="btn-group">
            <a
              href={"https://github.com/Archana-ks/react-Day-5"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Code
            </a>
            <a
              href={"https://starlit-biscuit-5423ae.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
          </div>
        </div>
    </div>
    </div>
  );
};
export default Projects;
