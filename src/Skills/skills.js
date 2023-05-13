import React from "react";
import "./skills.css";
import htmlImage from "../Images/html.png";
import cssImage from "../Images/css.png";
import BootStrapImage from "../Images/bootstrap.png";
import JavaScriptImage from "../Images/javascript.png"
import ReactImage from "../Images/react.png";
import ReduxImage from "../Images/redux.png";
import NodeJSImage from "../Images/nodejs.png";
import MongoDBImage from "../Images/mongodb.png";
import ExpressImage from "../Images/express.png";
import MySqlImage from "../Images/mysql.png";


const Skills=()=>{
    return(
        
        <div className="skills-page">
        <div className="skills-side">
          <h1 className="skills-heading">
          Skills
         </h1>
         <div className="tech-stack">
          <img src={htmlImage} alt="htmlImage" />
          <img src={cssImage} alt="cssImage" />
          <img src={BootStrapImage} alt="BootStrapImage" />
          <img src={JavaScriptImage} alt="JavaScriptImage" />
          <img src={ReactImage} alt="ReactImage" />
          <img src={ReduxImage} alt="ReduxImage" />
          <img src={NodeJSImage} alt="NodeImage" />
          <img src={MongoDBImage} alt="MongoImage" />
          <img src={ExpressImage} alt="ExpressImage" />
          <img src={MySqlImage} alt="mysqlImage" />

        </div>
        </div>
        </div>
    )
}

export default Skills;