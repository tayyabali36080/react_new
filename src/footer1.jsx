import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer1.css';
import React from "react";
import { faFacebook, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer1(){
    return(
<div className="footer">
<div className="footer1 text-center mt-4">
    <p>copyright ? 2024 news-channel</p>
    <div className='footer2'>
<FontAwesomeIcon icon={faFacebook} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
<FontAwesomeIcon icon={faTwitter} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
<FontAwesomeIcon icon={faYahoo} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
<FontAwesomeIcon icon={faYoutube} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
</div>
   </div>
</div>
    );
}