import React from "react";
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
            <p>&copy; 2022 Abed Belal.</p>
        </div>
    );
}

export default Footer;