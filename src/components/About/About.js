import React from "react";
import "./About.css"
import { themeContext } from '../../context';
import {useContext} from 'react'
import star from '../../img/star.gif';
import men from '../../img/men.png';
export default function About(){
    const theme = useContext(themeContext)
    const darkMode =theme.state.darkMode;

    {
        /*
     const about = document.querySelectorAll(".slider")

    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
            console.log(entry)
            entry.target.classList.add('show')
        }else{
            entry. target.classList.remove('show')
        }
       
      })
    } )
     
    about.forEach(about=>{
        observer.observe(about)
    })

        */
    }
   
    return(
        <div className="about" id="About">
            <div className="a-left" style={{color:darkMode?'black':'black'}}>
            <div>
            <h1 className="a-heading" >About</h1>
           
           <h1 className="a-name"><img src={star} className="star"/>I'm  Archana</h1>
           <p className="description">
           <img src={star} className="star"/>
            I'm excited about creating meaningful web applications and open to collaboration and learning opportunities.
            Let's connect and build amazing things together!
            </p>

            {/* <h1 className="a-name"><img src={star} className="star"/>I'm  Archana</h1>
           <p className="description">
           <img src={star} className="star"/>
            I'm excited about creating meaningful web applications and open to collaboration and learning opportunities.
            Let's connect and build amazing things together!
            </p> */}

            
            <p className="description des-2"><img src={star} className="star"/> 
            Looking forward to showcasing and utilizing
             my current skill set and experience of working on 
             projects to grow and achieve organizational goals.</p>
            </div>
             </div>
            <div className="a-right">
                <div className="men">
                <img src={men} className="men"/>
                </div>
                
                
           </div> 
                 
        </div>
    )
}