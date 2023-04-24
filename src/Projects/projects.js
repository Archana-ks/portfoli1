 import React from "react";
import "./projects.css";

const Project= ()=>{
    return(
       <div className="project_page">
        <div className="project-content">
          <h1>ECommerce Cart Design</h1>
          <img src="https://www.shutterstock.com/image-photo/colorful-paper-shopping-bags-trolley-ideas-575822173" 
            alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/SanJay1577/ecommerce-frontend.git"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code{" "}
            </a>
            <a
              href={"https://fitness-shop.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
          </a>
        </div>
       </div>
       </div>
    )
}

export default Project;