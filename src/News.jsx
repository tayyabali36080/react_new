
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import React, { useState } from "react";
import { faFacebook, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import News from './breakingnews';
import './News.css';
import { blog } from './data';
import Detail from './detail';
import { more } from './morenews';
import './detail.css';
import Footer from './footer';
export default function Newspage(){
    let [phide,setPhide]=useState(blog[0].id);
    return(
<div className="Newspage">
<Header/>
<News/>

<h2>Frequently Asked Questions</h2>

{ blog.map((v,i)=>{
    return(
<div className={`faqs ${phide==v.id ? 'faq':'faqs'}`} >
<h3 onClick={()=>setPhide(v.id)}>{v.id}:{v.question}</h3>
    <p>{v.Answer}</p>
</div>
    );
  })
}
  <div className="detail row col-md-12 col-sm-12 col-lg-12">
    <h4>More News</h4>
  {more.map((v,inn)=>{
return(
    <div className='row col-lg-4 mt-4'>
    <Detail pitem={v} i={inn} ></Detail>
    </div>
);
  })}
  
</div>
<Footer/>
</div>
    );
}
