import React from "react";
import { Git, acnchorlink,  } from "../Assets/Image/image";

const Projectcard = ({Title,About,stack,cardimage}) => {
  return (
    <div className="projectcard">
      <h2>
        <img src={cardimage} alt="project" />
      </h2>
      <div className="projectinfo">
        <p className="title">{Title}.</p>
        <p className="info">
          {About}
        </p>
        <div className="stack">
          
          <p className="title">Tech Stack:</p> 
          <div className="items">
          {stack.map((item,index)=>{
            return <p key={index}>{item},</p>

          })}
          </div>
          
        </div>
        <div className="link">
          <p>
            <i>
              <img src={acnchorlink} alt="link" />
            </i>
            Link Preview
          </p>{" "}
          <p>
            <i>
              <img src={Git} alt="git" />
            </i>
            View code
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projectcard