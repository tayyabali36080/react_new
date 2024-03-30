import React from "react";
import './international.css';
export default function Uni(){
    return(
        
       <div className="int col-lg-4 col-sm-12 col-md-6">
        
        <div className="man">
            <h4 className="ml-2">International</h4>
            <div className="medi">    
                <img  width={120} height={120} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/50F9/production/_132892702_arielhenry.png.webp"/>
        <a className="" href="">Haiti's Prime Minister Ariel Henry resigns as law and order collapse</a>
            </div>
            <div className="las">    
                <img  width={120} height={120} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/D654/production/_132886845_gettyimages-1258810033.jpg.webp"/>
        <a className="" href="">Boeing whistleblower found dead in US</a>
            </div>
        </div>
        
       </div>
    );
}
