import React from "react";
import "./Education.css"
import { IoIosSchool } from "react-icons/io";

import { AiFillBulb } from "react-icons/ai";
import Experience from "../Card/ProjectCard";
import Card from "../Card/Card";


 
const Education = ()=>{


    return(
        <div className="education" id="Education">
            <h1 className="e-heading"id="e-journey">My <span className="e-journey">Journey</span></h1>
            <div className="edu-left eduhide">
                <div>
                <h2 className="edu-heading"><IoIosSchool/>Education</h2>
            <div className="degree">
            <Card
               university ={"Bharathiar University"}
               degree = {"Master of Computer Application"}
               year ={"2006 - 2009"}
               percentage = { "Completed with first class - 86%"}
               />
            </div>
            <div className="hsc">
               <Card
               university ={"Periyar University"}
               degree = {"Bachelor of Science"}
               year ={"2002-2005"}
               percentage = { "Completed with first class - 66%"}
               />
               </div>
               <div className="sslc">
               <Card
               university ={"Govt.Girls.Her.Sec.School"}
               degree = {"HSLC"}
               year ={"2000 - 2002"}
               percentage = { "Completed with first class - 74%"}
               />
               </div> 
            
            </div>
                </div>
                        
        </div>
    )
}
export default Education;