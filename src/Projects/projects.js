import React from "react";
import "./projects.css";



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
          <h3>Representing frontend cart design</h3>
          <div className="btn-group">
            <a
              href={"https://github.com/Archana-ks/day23--1"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              CODE
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
