import React from "react";
import "../Assets/Css/About/About.css"
const About=()=>{
    return(
        <div className="about wrapper" id="About">
            <div className="Intro">
                <h2>About Me</h2>
                <p>As a highly motivated React JS developer, I am passionate about
                delivering user-friendly and intuitive web experiences. My technical skills
                have been honed through hands-on projects, and I possess a strong
                foundation in web development principles. I am excited to leverage my
                expertise and problem-solving abilities to contribute to a dynamic team
                and drive growth</p>
            </div>
            <div className="Education">
                <h2 className="title">Education</h2>
                <div className="info">
                    <h2 className="course">Bachelor In Computer Application <span>Full-Time</span></h2>
                    <p>VLB Janakiammal College Of Arts And Science <br />Kovaiputhur,Coimbatore,Tamilnadu<span>2020-2023</span></p>
                    <p></p> 
                </div>
                <div className="info">
                    <h2 className="course">Higher Secondary Computer Science <span>Full-Time</span></h2>
                    <p>KPRP HSS KONGAD <br />Kongad, Palakkad, Kerala<span>2018-2020</span></p>
                    <p></p> 
                </div>
                
            </div>
        </div>
    )
}
export default About