import React from "react";
import proPic from "../AboutMe/Pro_Pic.PNG"
export default function AboutMe() {
    return (
      <div className="aboutMe">
        <h1 className="aboutmeHeader">About Me</h1>
        <img className="proPic"
        src={proPic}
        alt="Profile Picture"
        key="Kyler Mclachlan"

        ></img>
        <p className="bio">
        Kyler Mclachlan is a burgeoning GIS Developer with over 5 years of experince as a Data/GIS Analyst. Mclachlan is currently working hard to become a full stack developer, and has a passion for applying programmatic thinking to geospatial problems. Mclachlan currently works at Polaris industries as a GIS Analyst. He currentl specialties include Spatial Analytics, Web Map Management, Project Development Cartography ESRI Suite, Database Management, Python, Javascript, and more.
        </p>
      </div>
    );
  }
  