import React from "react";
import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1 id="about-h1">UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          natus alias illum? Praesentium pariatur quibusdam deleniti! Placeat
          odio ratione molestias itaque aperiam, quaerat impedit modi, vitae at,
          labore vero nihil.
        </p>
        <button>Read More</button>
        <div className="about-image">
          <img src={aboutImage} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
