import React from "react";
import { Git, acnchorlink, cardimage } from "../Assets/Image/image";

const Projectcard = () => {
  return (
    <div className="projectcard">
      <h2>
        <img src={cardimage} alt="project" />
      </h2>
      <div className="projectinfo">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          velit voluptatibus veniam ullam doloremque facilis, quasi nemo autem
          nam reprehenderit!
        </p>
        <p className="stack">
          {" "}
          Tech Stack: <span>Html,css,js</span>
        </p>
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