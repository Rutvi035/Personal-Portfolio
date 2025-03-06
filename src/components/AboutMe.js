import React from 'react';
import '../assets/styles/AboutMe.css';
import photo from '../assets/images/Photo.png';
import Resume from '../assets/Resume.pdf';


export default function AboutMe() {
    const onDownloadCV = () => {
        const link = document.createElement("a");// dynamically create an <a> (anchor) element for downloading your resume
        link.href = Resume; // Set the 'href' attribute to the imported Resume path
        link.download = "Resume.pdf"; // Specify the desired filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="about-me" id='aboutMe'>
            <h1>Rutvi Dekiwadia</h1>
            <img src={photo} alt="Rutvi Dekiwadia" className="profile-image" />
            <p>
            A dedicated Software Developer skilled in Python, Java, JavaScript, C#, and SQL.Passionate about solving problems, I create user-friendly applications and deliver projects efficiently. Currently pursuing an Advanced Diploma in Software Engineering Technology at Centennial College, I am exploring AI, Machine Learning, and Blockchain.
            Beyond coding, I am a certified classical dancer, reader, and team player who loves taking on leadership roles. Let's connect and build something amazing!
            </p>
            <button onClick={onDownloadCV} className="resume-link">
                Download Resume
            </button>
        </div>
    );
}