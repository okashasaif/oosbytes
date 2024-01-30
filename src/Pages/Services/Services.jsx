import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import OosbytesLogo from '../images/OosbytesLogo.png';
import footer from '../images/Footer.png';
import Fonts from '../Fonts/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faUpwork } from '@fortawesome/free-brands-svg-icons';
import './NavbarandFootbar.css';
import './services.css';



const Home = () => {

  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };


  return (
    <div>
    <div className="navbar">
        <div className="logo">
        <Link to="/" style={{textDecoration:"none"}}><img src={OosbytesLogo} alt="Logo" /></Link>
        </div>
        
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
        <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li><Link  to="/" style={{textDecoration:"none"}}><span className='height'> Home</span></Link></li>
        <li><Link  to="/Services" style={{textDecoration:"none"}}><span className='height'>Services</span></Link></li>
        <li><Link  to="/Portfolio" style={{textDecoration:"none"}}><span className='height'>Portfolio</span></Link></li>
        <li><Link  to="/Contactus" style={{textDecoration:"none"}}><span><button className='buttonNavbar'>Contact us   <Fonts/> </button></span></Link></li>
        </ul>
      </div>


<div className='Servicesmain'>
<div className='Webappstext'><h2 className='textwebapps'>WEB APPS & WEBSITES</h2>
<h2 className='textwebapps'>DEVELOPMENT</h2>
</div>
<div>
<h4 className='webappstext1'>
Our design and development team is here to assist you in crafting the ideal solution, whether it's for lead generation, e-commerce, a microsite, or a website redesign.</h4>
</div>
</div>

<div className='Solutionsweoffer'> 
<div className='solutionsheading'><h3 >SOLUTIONS WE OFFER</h3></div>
  <div className='cloums4-1'>
    <div className='columns4'> <h3 className='insidesolution'>E-Commerce Websites</h3></div>
    <div className='columns4'> <h3 className='insidesolution'>Informational Websites</h3></div>
    <div className='columns4'> <h3 className='insidesolution'>Learning Management Systems LMS</h3></div>
    <div className='columns4'> <h3 className='insidesolution'> Personal Websites</h3> </div>

  </div>
  <div className='cloums4-2'>
    <div className='columns4'> <h3 className='insidesolution'>Portfolio Websites</h3></div>
    <div className='columns4'> <h3 className='insidesolution'>Landing Pages</h3></div>
    <div className='columns4'> <h3 className='insidesolution'>One Page Websites</h3></div>
    <div className='columns4'> <h3 className='insidesolution'> Project Management Websites</h3> </div>

  </div>
</div>

    <footer className='Footer'>
      <div className='UpperPart'>
        <div className='LeftSide'> 
        <h3 className='subheading'>Ready to establish your Digital presecnce?</h3>
        <h4 className='subheading'>Connect with OOs Bytes today, and let's transform your ideas into a compelling online experience.</h4>
        <div className='icons2'>
      <p>
        <FontAwesomeIcon icon={faPhone} /> : +1 123 456 789
      </p>
      <p className='mailicon'>
        <FontAwesomeIcon icon={faEnvelope} />  : contact@oosbytes.com
      </p>
    </div>
        </div>
<div className='Rightside'>
<img  className='footerpic' src={footer} alt="Logo" />
</div>

      </div>

      <div className='straightline'><hr/></div>

    <div className='Lowerpart'>
      <div className='FindusOn'>
        <h3 className='find1'>Find us on</h3>
        <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='icons'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='icons'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"className='icons'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://upwork.com" target="_blank" rel="noopener noreferrer"className='icons'>
        <FontAwesomeIcon icon={faUpwork} />
      </a>
    </div>
      </div>
      <div> <h4 className='Copyright'>© 2024 OOsBytes. All Rights Reserved.</h4></div>
      </div> 
    </footer>


   <Fonts/>
    </div>
  );
}
export default Home;
