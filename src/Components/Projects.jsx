import React from "react";
import { Git, acnchorlink, cardimage } from "../Assets/Image/image";
import "../Assets/Css/projectpage/project.css"
import Projectcard from "./projectCard";
import { ProjectDetails } from "./consts/const";

const Projects=()=>{
    return(
        <div className="Projects wrapper" id="Project">
            <div className="Title">
                <h2>Projects</h2>
                <p>Things i've built so far</p>
            </div>
            <div className="projectSection">
                {ProjectDetails.map((item)=>{
                    const {id,Title,About, Stack,image}=item
                    return<Projectcard Title={Title} About={About} stack={Stack} cardimage={image}/>
                })}
            </div>
        </div>
    )
}
export default Projects;