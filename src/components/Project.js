import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.css';

export default function Project() {
    return(
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/Rutvi035/Banking-System" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/Rutvi035/Banking-System" target="_blank" rel="noreferrer"><h2>Banking System</h2></a>
                    <p>This project of online banking system is my first Internship project. I have tried to imply the essentials in simple and short illustrations. This is the general project to implement and understand.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Rutvi035/Collision_Analysis" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/Rutvi035/Collision_Analysis" target="_blank" rel="noreferrer"><h2>Collison Analysis</h2></a>
                    <p>The concept of this web app is to visualize the data of collision of the vehicle in the New York city. This builds a Data Science Web App with Streamlit and Python. Using this project one can determine the data analysis of the collision of the various database.</p>
                </div>
              
                
            </div>
        </div>
    );
}