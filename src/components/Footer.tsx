import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

const encodedEmail = "enlrb3NpbmNlOTRAZ21haWwuY29t";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/rishabh-pandey-zykosince94/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://github.com/zykosince94/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.facebook.com/zykotek/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
        <a href="#" onClick={() => { window.alert("Please contact me at " + atob(encodedEmail) + ", Thank you :)"); }} rel="noreferrer"><EmailIcon /></a>
      </div>
      <p>Rishabh Pandey, 2025</p>
    </footer>
  );
}

export default Footer;