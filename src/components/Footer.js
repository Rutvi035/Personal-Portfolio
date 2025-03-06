import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Rutvi035" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rutvi-dekiwadia/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Rutvi035/Personal-Portfolio" target="_blank" rel="noreferrer">Rutvi Dekiwadia</a> with 💜</p>
    </footer>
  );
}

export default Footer;