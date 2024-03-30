import React from "react";

import './detail.css';
import { Link } from "react-router-dom";
export default function Detail({pitem,i}){
    return(

    <div className=" copnten ">
   <ul >
   <Link to={`/more/${pitem.id}`}><li><h5>{pitem.question1}</h5></li></Link>
   <Link to={`/more/${pitem.id}`}><li><h5>{pitem.question1}</h5></li></Link>
   <Link to={`/more/${pitem.id}`}><li><h5>{pitem.question1}</h5> </li></Link>
   </ul>
</div>
    );
}
