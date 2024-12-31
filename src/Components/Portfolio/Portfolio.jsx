// import React from "react";
// import "./Portfolio.css";
// import savage from "../../assets/savage.png";
// import productCart from "../../assets/product-cart.png";
// import github from "../../assets/github.png";
// import whatsapp from "../../assets/whatsapp.png";

// const Portfolio = () => {
//   const projectDetailsObject = [
//     {
//       name: "Savage Brand",
//       image: savage,
//       desc: "This is a clothing brand website made using React js and withthe help of Animation on scroll library. It has ability to addproducts to favorite and cart",
//       video: "video",
//     },
//     {
//       name: "Whatsapp Clone",
//       image: whatsapp,
//       desc: "This is a simple project whatsapp clone project using HTML,CSS \
//               and JavaScript can has some default messages, which also have \
//               the ability to send add to the message using the input",
//       video: "video",
//     },
//     {
//       name: "Github Profile",
//       image: github,
//       desc: "   This is a projects made using github api, to display any active\
//                 github users profile information such as thimbnail, username,\
//                 followind, followers, bio and anchor of repositories\
//   ",
//       video: "video",
//     },
//     {
//       name: "Photographer & Videographer portfolio",
//       image: whatsapp,
//       desc: "This is a simple project whatsapp clone project using HTML,CSS\
//               and JavaScript can has some default messages, which also have\
//               the ability to send add to the message using the input",
//       video: "video",
//     },
//   ];

//   // const projectsDetailCard =
//   projectDetails.innerHTML = projectsDetailCard;

//   return (
//     <div id="portfolio-section">
//       <div className="container pt-3">
//         <div className="d-flex justify-content-between align-items-center pt-5">
//           <h2 data-aos="fade-right" data-aos-duration="1000"></h2>
//           <span data-aos="fade-left" data-aos-duration="1000">
//             2023-2024
//           </span>
//         </div>
//       </div>

//       <div className="projects-section pt-5 pb-5">
//         <div
//           className="project-div mt-3"
//           data-aos="fade-right"
//           data-aos-duration="800"
//         >
//           <img src={productCart} alt="" />
//         </div>
//         <div
//           className="project-div mt-3"
//           data-aos="fade-up"
//           data-aos-duration="800"
//         >
//           <img src={github} alt="" />
//         </div>
//         <div
//           className="project-div mt-3"
//           data-aos="fade-left"
//           data-aos-duration="800"
//         >
//           <img src={savage} alt="" />
//         </div>

//         <div id="projects-details" className="pt-5 mt-5">
//           {projectDetailsObject.map((project) => (
//             <div className="container">
//               <div
//                 className="ext-project-img"
//                 data-aos="zoom-in"
//                 data-aos-duration="1000"
//               >
//                 <a href="" target="_blank" rel="noopener noreferrer">
//                   <img src="${project.image}" alt="" />
//                 </a>
//               </div>

//               <div className="ext-project-details">
//                 <h3 data-aos="fade-up" data-aos-duration="1000">
//                   ${project.name}
//                 </h3>
//                 <p data-aos="fade-up" data-aos-duration="800">
//                   ${project.desc}
//                 </p>

//                 <ul>
//                   <li data-aos="fade-up" data-aos-duration="800">
//                     View project
//                   </li>
//                   <li data-aos="fade-up" data-aos-duration="800">
//                     See code
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import { React, useState, useRef } from "react";

import "./Portfolio.css";
// Images
import savage from "../../assets/savage.png";
import productCart from "../../assets/product-cart.png";
import github from "../../assets/github.png";
import whatsapp from "../../assets/whatsapp.png";
import rebel from "../../assets/rebel.png";
import youtube from "../../assets/youtube-downloader.png";
import myPortfolio from '../../assets/my-portfolio.png'
// Video
import savageVid from "../../assets/savage-video.mp4"
import whatsappVid from "../../assets/whatsapp-video.mp4"
import githubVid from "../../assets/github-video.mp4"
import rebelVid from "../../assets/rebel-video.mp4"
import ytVid from '../../assets/ytVid.mp4'
import myPortfolioVid from "../../assets/portfolio-vid.mp4"

const Portfolio = () => {
  const videoRefs = useRef([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectDetailsObject = [
    {
      name: "Savage Brand",
      image: savage,
      desc: "This is a clothing brand website made using React.js with the help of Animation on Scroll library. It has the ability to add products to favorites and cart.",
      video: savageVid,
      repo: "https://github.com/Johntizzyy/Savage",
      link: "https://johntizzyy.github.io/Savage/",
    },
    {
      name: "Whatsapp Clone",
      image: whatsapp,
      desc: "This is a simple WhatsApp clone project using HTML, CSS, and JavaScript. It has some default messages and the ability to send messages using input.",
      video: whatsappVid,
      repo: "https://github.com/Johntizzyy/Whatsapp-Clone-using-HTML-CSS-and-JavaScript",
      link: "https://johntizzyy.github.io/Whatsapp-Clone-using-HTML-CSS-and-JavaScript/",
    },
    {
      name: "Photographer & Videographer Portfolio",
      image: rebel,
      desc: "This portfolio showcases work as a photographer and videographer.",
      video: rebelVid,
      repo: "https://github.com/Johntizzyy/rebel-shot",
      link: "https://johntizzyy.github.io/rebel-shot/",
    },
    {
      name: "Github Profile",
      image: github,
      desc: "This project uses the GitHub API to display any active GitHub user's profile information such as thumbnail, username, following, followers, bio, and repositories.",
      video: githubVid,
      repo: "https://github.com/Johntizzyy/Github-user-profile",
      link: "https://johntizzyy.github.io/Github-user-profile/",
    },

    {
      name: "Youtube Video download",
      image: youtube,
      desc: "This project uses both youtube v3 api y2mate to fully function. The youtube v3 api is used to display youtube video details like thumnail, title and the description.\
      while y2mate to download the video",
      video: ytVid,
      repo: "https://github.com/Johntizzyy/youtube-video-downloader",
      link: "https://johntizzyy.github.io/youtube-video-downloader/",
    },
    {
      name:"My Portfolio🌚",
      image:myPortfolio,
      desc:"I am Adepoju John Blessing and this my portfolio is created using React",
      video:myPortfolioVid,
      repo:"#",
      link:"#"
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredProject(index); // Set the hovered project index
    if (videoRefs.current[index]) {
      videoRefs.current[index].play(); // Play the corresponding video
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredProject(null); // Reset hovered project
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause(); // Pause the corresponding video
      videoRefs.current[index].currentTime = 0; // Reset video to start
    }
  };

  return (
    <div id="portfolio-section">
      <div className="container pt-3">
        <div className="d-flex justify-content-between align-items-center pt-5">
          <h2 data-aos="fade-right" data-aos-duration="1000">
            My Projects
          </h2>
          <span data-aos="fade-left" data-aos-duration="1000">
            2023-2024
          </span>
        </div>
      </div>

      <div className="projects-section pt-5 pb-5">
        <div
          className="project-div mt-3"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <a href="https://johntizzyy.github.io/Frontend-Mentor-Product-list-with-cart/" target="_blank">
            <img src={productCart} alt="Product Cart" />
          </a>
        </div>
        <div
          className="project-div mt-3"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <a href="https://johntizzyy.github.io/Github-user-profile/" target="_blank">
            <img src={github} alt="GitHub Project" />
          </a>
        </div>
        <div
          className="project-div mt-3"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <a href="https://johntizzyy.github.io/Savage/" target="_blank">
            <img src={savage} alt="Savage Brand" />
          </a>
        </div>

        {/* Displaying project details */}
        <div id="projects-details" className="pt-5 mt-5">
          {projectDetailsObject.map((project, index) => (
            <div className="container" key={index}>
              <div
                className="ext-project-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  
                >
                  {/* {isHovered ? (
                    <video ref={videoRef} muted loop autoPlay>
                      <source src={project.video} type="video/mp4" />
                      Your browser doesn't support video tags
                    </video>
                  ) : (
                    <img src={project.image} alt={project.name} />
                  )} */}
                  {hoveredProject === index ? ( // Check if this project is hovered
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      muted
                      loop
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser doesn't support video tags.
                    </video>
                  ) : (
                    <img src={project.image} alt={project.name} />
                  )}
                </a>
              </div>

              <div className="ext-project-details">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  {project.name}
                </h3>
                <p data-aos="fade-up" data-aos-duration="800">
                  {project.desc}
                </p>

                <ul>
                  <li data-aos="fade-up" data-aos-duration="800">
                    <a href={project.link} target="_blank">View project</a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="800">
                    <a href={project.repo} target="_blank">See code</a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
