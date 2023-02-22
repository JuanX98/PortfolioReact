import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-scroll'


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{color: darkMode ? 'white' : ''}}>Works for all these</span>
        <span>Brands & clients</span>
        <spane style={{color: darkMode ? 'white' : ''}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          impedit culpa sapiente laudantium
          <br />
          impedit culpa sapiente laudantium accusantium laudantium
          <br />
          Lorem ipsum dolor sit amet
        </spane>
        <button className="button s-button">Hire Me </button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        {/* BACKGROUND CIRCLES */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  );
};

export default Works;
