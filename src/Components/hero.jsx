import React from "react";
import { MyImage } from "../Assets/Image/image";
import "../Assets/Css/Hero/Hero.css"

const Hero=()=>{

    return(
        <div className="hero" id="Home">
            <div className="left">
                <h1>
                    Hai,<br/>
                    My Name Is <br />
                   <span>Adith Sukumar KA</span> <br />
                    I Am A Frontend Developer
                </h1>
            </div>
            <div className="image">
                <img src={MyImage} alt="Profile" />
            </div>

        </div>
    )
}
export default Hero