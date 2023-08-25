import React from "react"
import ProjectCard from "./ProjectCard";
import VCS from "../../img/VCS.png";
import pizza from "../../img/pizza.png";
import './Project.css'


export default function ProjectDetails(){

  
    return(
        <div className="project-list" id="Projects">
            <div className="headers">
                <h1 style={{fontSize:"2rem"}}>Projects</h1>
            </div>
            <div className="project-details">
                <div className="first-set">

                <ProjectCard
              img={VCS }
              title={"Version Control System"}
              content={"⭐ – The version control system project aims to enhance collaboration and code management by providing a centralized platform for tracking, managing, and coordinating software development changes across a team, ensuring efficient code versioning and seamless collaboration. "}
              frontend ={"https://github.com/Archana-ks/version-control-system-fe"}
              backend={"https://github.com/Archana-ks/version-control-system-be"}
              live ={"https://version-control-system-fe.netlify.app/"}
              ficon={"REACTJS | REACT-BOOTSTRAP | REACT-REDUX |  REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | VALIDATOR | CORS | BCRYPT | MONGOOSE"}
              db={"MONGODB"}
              
            />

                <ProjectCard
              img={pizza}
              title={"Pizza App"}
              content={"⭐Developed a user-friendly pizza delivery app that seamlessly connects customers with nearby pizzerias, providing efficient ordering and real-time order tracking for an enhanced dining experience."}
              frontend ={"https://github.com/Archana-ks/webcode2"}
              backend ={"https://github.com/Archana-ks/pizza-back"}
              live ={"https://snazzy-cheesecake-d94bb6.netlify.app/"}
              ficon={"REACTJS | REACT-BOOTSTRAP | MATERIAL UI | REACT-SCRIPTS | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | CORS | BCRYPT |"}
              db={"MONGODB"}
              />
                   
            {/* <ProjectCard
              img={foodzie}
              title={""}
              content={"⭐"}
              frontend ={""}
              live ={""}
              ficon={""}
            />
             
               
            </div>
            <div className="second-set">
            <ProjectCard
              img={taskmanager}
              title={""}
              content={"⭐"}
              frontend ={""}
              backend={""}
              live ={""}
              ficon={"REACTJS | REACT-BOOTSTRAP | FORMIK | YUP | VITE | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | NODEMAILER | RAZORPAY | JWD | CRYPTO | BCRYPT | MONGOOSE"}
              db={"MONGODB"}
            />
            <ProjectCard
              img={pettycash}
              title={""}
              content={"⭐"}
              frontend ={""}
              backend={""}
              live ={""}
              ficon={"REACTJS | REACT-DATEPICKER | AXIOS | STYLED-COMPONENTS | REACT-TOASTIFY | CHART.JS | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | NODEMAILER | VALIDATOR | JWD | COOKIE-PARSER | BCRYPT | MONGOOSE"}
              db={"MONGODB"}
            />
             
             <ProjectCard
              img={urlshortner}
              title={""}
              content={"⭐"}
              frontend ={" "}
              backend={""}
              live ={""}
              ficon={"REACTJS | REACT-BOOTRAP | REACT-TOASTIFY | REACT-SCRIPT | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | SHORTID | EJS | NODEMON | MONGOOSE"}
              db={"MONGODB"}
            />
              */}

            </div>
        
            </div>
            
            </div>

            )}
          
