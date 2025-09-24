import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import PortraitImage from '../assets/images/portrait.jpg';

const encodedEmail = "enlrb3NpbmNlOTRAZ21haWwuY29t";

function Main() {

  console.log("Thanks to Yuji Sato for the Portfolio Template", "https://github.com/yujisatojr");

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={PortraitImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/rishabh-pandey-zykosince94/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/zykosince94/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.facebook.com/zykotek/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="#" onClick={() => {window.alert("Please contact me at " + atob(encodedEmail) + ", Thank you :)");}} rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Rishabh Pandey</h1>
          <p>Full Stack Engineer | Game Developer</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/rishabh-pandey-zykosince94/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/zykosince94/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.facebook.com/zykotek/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="#" onClick={() => {window.alert("Please contact me at " + atob(encodedEmail) + ", Thank you :)");}} rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;