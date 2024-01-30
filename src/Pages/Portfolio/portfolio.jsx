import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import OosbytesLogo from '../images/OosbytesLogo.png';
import footer from '../images/Footer.png';
import Fonts from '../Fonts/Fonts';
import portfoliofront from '../images/app-development.png'; 
import reactlogo from '../images/reactlogo.png'
import nodelogo from '../images/nodelogo.png';
import picture1 from '../images/1234.png'
import picture2 from '../images/picture2.png'
import mysql from '../images/mysql.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faUpwork } from '@fortawesome/free-brands-svg-icons';
import './NavbarandFootbar.css';
import './Portfolio.css';

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
        <li><Link  to="/" style={{textDecoration:"none"}}><span className='height'>Home</span></Link></li>
        <li><Link  to="/Services" style={{textDecoration:"none"}}><span className='height'>Services</span></Link></li>
        <li><Link  to="/Portfolio" style={{textDecoration:"none"}}><span className='height'> Portfolio</span></Link></li>
        <li><Link  to="/Contactus" style={{textDecoration:"none"}}><span><button className='buttonNavbar'>Contact us   <Fonts/> </button></span></Link></li>
        </ul>
      </div>


      <div className='ProjectsDone'>
        <div className='ProjectsDoneleft'>
          <div className='Showcase'><h2>Delivered Projects Showcase!</h2></div>
          <div ><h4 className='showcase1'> In our software development firm, we design numerous projects for global corporations, small enterprises,
           and various organizations, seeking to unlock new avenues for growth, streamline processes, and foster ongoing enhancements. 
           Our dedicated team comprises seasoned developers, creative minds, designers, and project managers, providing a trustworthy foundation for your needs.</h4>

          
          </div>
        </div>
        <div className='ProjectsDoneright'>
          <img className='portfoliofront' src={portfoliofront} alt='front'/>
        </div>
      </div>

      <div className='workglance'>
        <div><h2 className='headingwork'>OUR WORK AT A GLANCE</h2></div>
        <div className='buttonwork'><button className='buttonwork1'>WEB APP</button></div>
        <div className='straightlinework'><hr/></div>
        <div className='glance1'>
          <div className='glance1left'>
            <div><h3 className='okmeds'>Energy Manager </h3></div>
            <div className='Energymanager'> <h4>The Energy Manager is a Web App Integrated with Pre-Paid Energy Meters & Solar Inverters and shows live dynamic data</h4></div>
            <div className='techniquesokmeds'>
              <img className='logoreact' src={reactlogo} alt='logo'/>
              <img className='logoreact' src={nodelogo} alt='logo'/>
              <img className='logoreact' src={mysql} alt='logo'/>
            </div>
          </div>
          <div className='glance1right'>
            <img className='picture1' src={picture1} alt='748'/>
          </div>

        </div>
        <div className='glance2'>
        <div className='glance1right'>
            <img className='picture2' src={picture2} alt='748'/>
          </div>
          <div className='glance1left1'>
            <div><h3 className='okmeds'>Energy Manager </h3></div>
            <div className='Energymanager Energymanager1'> <h4>The Energy Manager is a Web App Integrated with Pre-Paid Energy Meters & Solar Inverters and shows live dynamic data</h4></div>
            <div className='techniquesokmeds'>
              <img className='logoreact' src={reactlogo} alt='logo'/>
              <img className='logoreact' src={nodelogo} alt='logo'/>
              <img className='logoreact' src={mysql} alt='logo'/>
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
