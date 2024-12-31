import React from "react";
import "./About.css";
import aboutImage from '../../assets/about.jpg'

const About = () => {
  return (
    <div id="about-section">
      <h1
        className="container"
        id="about-sectionn"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        About me
      </h1>
      <div className="container pt-5">
        <div className="about-img">
          <a href="#">
            <img
              src={aboutImage}
              alt=""
              data-aos="fade-right"
              data-aos-duration="800"
            />
          </a>
        </div>
        <div className="about-text" data-aos="fade-left" data-aos-duration="800">
          <h2>Adepoju John Blessing</h2>
          <p>
            I am a creative web developer with expertise in HTML, CSS,
            JavaScript, React and Python. I enjoy transforming ideas into
            functional user-friendly websites applications, focusing on both
            aesthetics and performance.
          </p>

          {/* <!--*********** needs work *********** --> */}
          <a href="https://github.com/Johntizzyy" className="" target="_blank">
            See Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
