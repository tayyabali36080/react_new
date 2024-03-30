import react from 'react'
import { blogs } from './data'
import { Link, useLocation } from 'react-router-dom'
import './newsdetail.css';
import { more } from './morenews'
import Header from './Header';
import News from './breakingnews';
import Footer from './footer';
import Footer1 from './footer1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export default function Blogdetail(){
    let uselocation=useLocation();
    let currentid=uselocation.pathname.split('/')[2];
    let currentData=more.filter((v)=>v.id==currentid)[0];
    return(
<div className='detailss'>
    <Header/>
    <News/>
    <h1 className='mt-4'>{ currentData.question1}</h1>
<div className="manag mt-4"> 

<img height={300} src={ currentData.image}/>
<div className="para">
    <p>{ currentData.details}</p>
    <form>
        <Link to='/News'><button className='btn btn-info'><FontAwesomeIcon icon={faBackward}/> Back</button></Link>
    </form>
    </div>
</div>
<div className='agg'>

</div>
<Footer></Footer>
</div>

);     
    
}
/*export default function Blogdetails(){
    let uselocation=useLocation();
    let currentid=uselocation.pathname.split('/')[2];
    let currentData=more.filter((v)=>v.id==currentid)[0];
    return(
        <div className='gass' >  
          <h1>  {currentData.title}</h1>
          <img src={currentData.image}/>

        </div> 
    )
}*/