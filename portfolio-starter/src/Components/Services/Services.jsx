import React from "react";
import "./Services.css";
import HeartE from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode ? 'white' : ''}}>My awesome</span>
        <span>Services</span>
        <spane style={{color: darkMode ? 'white' : ''}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          <br />
          impedit culpa sapiente laudantium, eius accusantium
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartE}
            heading={"Design"}
            detail={"Figma, Sketch, PhotoShop, Adobe, Adobe xd"}
          />
        </div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JAVASCRIPT, REACT, HTML, CSS, JAVASCRIPT"}
          />
        </div>

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam error sunt ut "
            }
          />
        </div>
      </div>
      <div className="blur s-blur2" 
      style={{background: 'var(--purple)'}}
      >

      </div>
    </div>
  );
};

export default Services;
