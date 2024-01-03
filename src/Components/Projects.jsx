import React from "react";
import { Git, acnchorlink, cardimage } from "../Assets/Image/image";
import "../Assets/Css/projectpage/project.css"
import Projectcard from "./projectCard";

const Projects=()=>{
    return(
        <div className="Projects wrapper">
            <div className="Title">
                <h2>Projects</h2>
                <p>Things i've built so far</p>
            </div>
            <div className="projectSection">
                 <Projectcard/>
                 <Projectcard/>
                 <Projectcard/>
                 <Projectcard/>
                 <Projectcard/>
                 <Projectcard/>
                 <Projectcard/>
                 <Projectcard/>
            </div>
        </div>
    )
}
export default Projects;