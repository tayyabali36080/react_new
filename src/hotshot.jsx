import React from "react";
import './hotshot.css';
export default function Shots(){
    return(
        <div className="head">
        <div className="hotshots col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="middle">
                <h4>Top Stories</h4>
                <img  width={120} height={120} src="https://i.dawn.com/medium/2021/12/61c1427d09380.jpg"/>
        <a className="" href="">Asif Ali Zardari — Pakistan's master manoeuverer</a>
            </div>
          <div className="next">
          <img  width={120} height={120} src="https://www.geo.tv/assets/uploads/updates/2024-03-10/534344_5803312_updates.jpg"/>
        <a className="" href="">China's Xi Jinping ready to work with newly elected President Zardari</a>
          </div>
          
</div>
<div className="manage mt-4">
    <h4>Latest News</h4>
        <iframe width="360" height="290" src="https://www.youtube.com/embed/UpaMPEdNFJk?si=_FRlALxTN8XpmVmy&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <a href=""><h5>Asif Zardari sworn in as 14th President of Pakistan</h5></a>
        <p>Chief Justice of Pakistan (CJP) Qazi Faez Isa administered the oath to the newly-elected president at the swearing-in ceremony that took place at the Aiwan-e-Sadr in Islamabad.</p>
          </div>
</div>
    );
}
