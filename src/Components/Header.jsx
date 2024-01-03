import React, { useState } from "react";
import { Link } from "react-scroll";
import { Git, LinkedIn, menu, twitter } from "../Assets/Image/image";
import { HeaderOptions } from "./consts/const";
import "../Assets/Css/header/Header.css";

const Header = () => {
  const [menuOpen, setMenuopen] = useState(false);
  return (
    <div className="header">
      <h1>Adith Sukumar Ka</h1>
      <div className="right">
        {HeaderOptions.map((item) => {
          const { text } = item;
          return (
            <Link to={text} spy={true} smooth={true} offset={-90}>
              <p className="options">{text}</p>{" "}
            </Link>
          );
        })}
        {menuOpen === false && (
          <>
          
            <span>
              <img src={twitter} alt="twitter" />
            </span>
            <a href="https://www.linkedin.com/in/adith-sukumar-ka/">
                <span>
                    <img src={LinkedIn} alt="LinkedIn" />
                </span>
             </a>
             <a href="https://github.com/Adith-00">
             <span>
              <img src={Git} alt="Git" />
            </span>
             </a>
            
          </>
        )}

        <div className="hamburger">
          <button
            onClick={() => {
              menuOpen ? setMenuopen(false) : setMenuopen(true);
            }}
          >
            <img src={menu} alt="hamburger" />
          </button>
          {menuOpen && (
            <div className="Hamoption ">
              {HeaderOptions.map((item) => {
                const { text } = item;
                return (
                  <Link to={text} spy={true} smooth={true} offset={-90}>
                    <p onClick={()=>{setMenuopen(false)}}>{text}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
