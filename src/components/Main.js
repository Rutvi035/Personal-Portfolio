import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.css";
import '../assets/styles/AboutMe.css';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img
            src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
            alt="Avatar"
          /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Rutvi035"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rutvi-dekiwadia/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Welcome to my portfolio</h1>
          <a
              href="#aboutMe"
              target="_self"
              rel="noreferrer"
              className="resume-link"
            >
              About Me
            </a>
          {/* <p>Full Stack Developer</p> */}

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Rutvi035"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rutvi-dekiwadia/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
