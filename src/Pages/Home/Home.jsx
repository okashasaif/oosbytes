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
import image from '../images/home2.gif';
import image3 from '../images/design-work-1.png'
import web from '../images/developing-1.png';
import app from '../images/app-development-1.png';
import './Home.css';


const Home = () => {

  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };


  return (
    <div>
    <div className="navbar height">
      
        <div className="logo">
        <Link to="/" style={{textDecoration:"none"}}><img src={OosbytesLogo} alt="Logo" /></Link>
        </div>
        
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
        <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li><Link  to="/" style={{textDecoration:"none"}}><span className='height'>Home</span></Link></li>
        <li><Link  to="/Services" style={{textDecoration:"none"}}><span className='height'>Services</span></Link></li>
        <li><Link  to="/Portfolio" style={{textDecoration:"none"}}><span className='height'>Portfolio</span></Link></li>
        <li><Link  to="/Contactus" style={{textDecoration:"none"}}><span ><button className='buttonNavbar'>Contact us    </button></span></Link></li>
        </ul>
      </div>
<div className='HomeFirstPart'>
  <div className='FirstPartleft'>
  <div className="writing-element"><h2 className='animationBytes1'>We are</h2><h1 className='animationBytes'>OOs Bytes</h1></div>
  <h3 className='Innovative'>
INNOVATIVE - RELIABLE - EFFICIENT - COST EFFECTIVE
</h3>
  </div>

  <div className='FirstPartright'>
    <img className='imagehome' src={image} alt="dddd" />
  </div>
</div>
<div className='WhatweProvide'>
  <h4 className='wwphead1'>WHAT WE PROVIDE?</h4>
  <div className='blocks'>
    <div className='UIUXblock'>
      <div className='insideUIUXblock'>
        <div className='insidepicture'><img src={image3} alt=''/></div>
        <div className='firsttext'><h4>UI/UX DESIGN</h4></div>
        <h3 className='firstextUIUX'>UI/UX design is the process of creating user interfaces that are</h3>
          <h3 className='firstextUIUX1'>both easy to use and aesthetically pleasing. It's about</h3>
          <h3 className='firstextUIUX'>understanding the needs of your users and designing a product</h3>
          <h3 className='firstextUIUX2'>that meets those needs.</h3>
      </div>
    </div>
    <div className='Webblock'>
    <div className='insideUIUXblock'>
        <div className='insidepicture1'><img src={web} alt=''/></div>
        <div className='firsttext1'><h4>WEB DEVLOPMENT</h4></div>
        <div className='secondtext1'>
          <h3 className='firstextweb'>Leveraging new approaches to web development including</h3>
          <h3 className='firstextweb1'>progressive web apps, we bring development and architecture</h3>
          <h3 className='firstextweb3'>ability together to deliver on your business need and maximize</h3>
          <h3 className='firstextweb2'>delivery speed.</h3>


        </div>
      </div>
    </div>
    <div className='Appblock'>
    <div className='insideUIUXblock'>
        <div className='insidepicture2'><img src={app} alt=''/></div>
        <div className='firsttext2'><h4>APP DEVELOPMENT</h4></div>
        <div className='secondtext2'>
        <h3 className='firstextapp'>We develop Mobile apps for Android and iOS platforms </h3>
          <h3 className='firstextapp1'>which are efficient, Pleasant i.e easy to navigate  </h3>
          <h3 className='firstextapp2'>&GUI and adhere to standards according </h3>
          <h3 className='firstextapp3'> to the need of Customer.</h3>
        </div>
      </div>
     
    </div>

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
<img className='footerpic' src={footer} alt="Logo" />
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
