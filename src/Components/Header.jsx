import React from "react";
import { Git, LinkedIn, twitter } from "../Assets/Image/image";
import { HeaderOptions } from "./consts/const";
import "../Assets/Css/header/Header.css"


const Header=()=>{
    return(
        <div className="header">
            <h1>
                Adith Sukumar Ka
            </h1>
            <div className="right">
                {HeaderOptions.map((item)=>{
                    const{text}=item
                    return <p>{text}</p> 
                })}
                <span><img src={twitter} alt="twittwe" /></span>
                <span><img src={LinkedIn} alt="twittwe" /></span>
                <span><img src={Git} alt="twittwe" /></span>
            </div>
        </div>
    )
}
export default Header