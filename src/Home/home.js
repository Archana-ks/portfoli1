import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="body-content">
        {
        <h1 className="animate__animated  animate__bounce  home-content"> Hi </h1>}
        <h1 className="animate__animated animate__bounce   home-content">
          I'm Archana K
        </h1>
        <h1 className="animate__animated animate__bounce   home-content">
          Full Stack Web Developer
        </h1>
        <br />
                  
        <button className="btn btn-resume">
          <a href={"http://bit.ly/Archana_Resume"}
          target="_blank"
          rel="noopener noreferrer" 
          >
            Resume
          </a>
        </button>
      </div>
      </div>
  );
};
export default Home;


