
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import React from "react";
import { faFacebook, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
<div className="footerstart">
    <div className="wholefooter ">
<div className="footerphara text-center mt-4 mb-0 pt-4 text-white">
    <p>copyright ? 2024 news-channel</p>
    </div>
    <div className='footericon text-center '>
<FontAwesomeIcon icon={faFacebook} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
<FontAwesomeIcon icon={faTwitter} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
<FontAwesomeIcon icon={faYahoo} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
<FontAwesomeIcon icon={faYoutube} style={{color:'white',fontSize:'30px',marginRight:'25px'}}></FontAwesomeIcon>
</div>
</div>
</div>
    );
}