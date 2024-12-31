import React from "react";
import "./Hero.css";
import mydp from '../../assets/my-dp.jpg'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div className="container" id="hero-section">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-8" id="hero-image">
          <img
            src={mydp}
            alt="Adepoju John's image"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>

        <div className="col-md-8 pt-3" id="hero-text">
          <h1 className="hero-header" data-aos="zoom-in" data-aos-duration="1000">
            Frontend developer from Nigeria
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000">
            I am <span>Adepoju John</span>, a passionate web developer with
            expertise in HTML, CSS, JavaScript, React and Python. I enjoy
            transforming ideas into functional user-friendly websites
            applications, focusing on both aesthetics and performance.
          </p>
          <a
            href={resume}
            className="btn text border pr-3"
            id="cv"
            data-aos="fade-up"
            data-aos-duration="1000"
            download="Resume.pdf"
          >
            Download cv
          </a>

          <a
            href="mailto:adepojujohn566@gmail.com"
            className="btn border"
            id="mail"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Send mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
