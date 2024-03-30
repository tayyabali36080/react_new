
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import React, { useState } from "react";
import { faFacebook, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faHouse, faNewspaper, faSignsPost, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header(){
    let [nav,setNav]=useState(false);
    return(
        <div className="uppe">
     
        <nav className='mt-0.5'>
         <div class="logo">NEWS-CHANNAL</div>
         <input type="checkbox" id="click"/>
    <label for="click" class="menu-btn">
    <span onClick={()=>setNav(!nav)}>{nav ? <FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars} />}</span>
    </label>
         <ul>
         <Link to={'/'} style={{textDecoration:'none'}}> <li><span><FontAwesomeIcon icon={faHouse} /></span><br></br><p>HOME</p> </li></Link>
             <li><span><FontAwesomeIcon icon={faUser} /></span><br></br>ABOUT</li>
             <li><span><FontAwesomeIcon icon={faEnvelope} /></span><br></br>BLOG</li>
             <li><span><FontAwesomeIcon icon={faSignsPost} /></span><br></br>POST</li>
             <Link to={'/News'} style={{textDecoration:'none'}}>  <li><span><FontAwesomeIcon icon={faNewspaper} /></span><br></br>NEWS</li></Link>
         </ul>
     </nav>
</div>
    );
}