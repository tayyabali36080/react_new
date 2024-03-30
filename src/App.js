import logo from './logo.svg';
import './App.css';
import './hotshot.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faBars, faBlog, faEnvelope, faHouse, faNewspaper, faSignsPost, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import News from './breakingnews';
import { useState } from 'react';
import Shots from './hotshot';

import './international.css';
import Uni from './int';
import { blog } from './data';
import { Row } from 'react-bootstrap';
import Sport from './sports';
import National from './national';
import Footer from './footer';
import Header from './Header';
import Footer1 from './footer1';
function App() {
  let [nav,setNav]=useState(false);
  return (
    
    <div className="upper">
     
     <Header/>
    <News/>
    <div className='midd mt-2'>
      <h1>Live updates — Vote count begins after polling ends for election of 14th president</h1>
  
      <img width={400} height={300} style={{float:'left',clear:'left'}}className='mt-3'src='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/07/29/Pictures/ballot_72319d70-931c-11e8-950a-c127747267f3.jpg'/>
    <p className='mt-3 mr-3' style={{textAlign:'justify',lineHeight:'35px',letterSpacing:'2px'}}><b>LAHORE: </b>Pakistan Muslim League-Quaid (PML-Q) leader Chaudhry Shafay Hussain said that he has voted for Asid Ali Zardari in the presidential poll. 

"We hope Zardari will take everyone along in the conduct of presidential affairs," Shafay said. 

He also expressed hope that the institutions responsible for the betterment of the economy will try to bring down inflation</p>
   <a className='btn btn-outline-info font-weight-bolder'>More News</a> 
    </div>
    <div className="hotshot">
<h3 className="mt-4">Hot Shots</h3>

</div>
    <Shots/>
    <div className="inte">
<h3 className="mt-4">Universal News</h3>
<Uni></Uni>
<Sport></Sport>
<National></National>
<Footer1/>
</div>



    </div>
    
  );
}

export default App;
