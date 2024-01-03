import React from "react";
import { Stackimg } from "./consts/const";
import "../Assets/Css/Stackicons/StackPage.css"

const StackIcons=()=>{
    return(
        <div className="StackIcons " id="TechStack">
            <div className="text">
                <h2>My Tech Stacks</h2>
                <p> Technologies I’ve been working with recently</p>
            </div>
            <div className="Images">
                {Stackimg.map((item)=>{
                    const{img}=item
                    return  <span><img src={img} alt="tecImg" /></span>
                })}
               
            </div>
        </div>
    )
}
export default StackIcons