import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import emailjs from 'emailjs-com';
import OosbytesLogo from '../images/OosbytesLogo.png';
import footer from '../images/Footer.png';
import Fonts from '../Fonts/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faUpwork } from '@fortawesome/free-brands-svg-icons';
import Contactfront from '../images/Blog - Codexia Technologies-0.png';
import './NavbarandFootbar.css';
import './Contactus.css';
import './Form.css';


const Home = () => {

  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
  const [formData, setFormData] = useState({
    selectPlaceholder: '',
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'service_9x7dmwi';
    const templateId = 'template_2qmo5yv';
    const userId = 'HdNlDinzYXEaYrxp4';

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
    }

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
    <div className='contactpagefirstpart'>
      <div className='RightSide1'>
        <div>
          <h1 className='letscommence'>Let's commence with your project.</h1>
          <h4 className='venturing'>Whether you're venturing into something innovative and fresh or seeking assistance with a project in progress, rest assured, we're here to support you.</h4>
          <h3 className='venturing'>To kickstart the process, simply complete the contact form provided below. </h3>
          <h2  className='venturing1'>Share the details of how we can be of service, and we'll be in touch promptly. Your vision is important to us, and we're ready to make it a reality.</h2>
        </div>
      </div>
      <div className='LeftSide1'>
        <img className='ImageContact1' src={Contactfront} alt='Contact1'/>
      </div>
    </div>

    <div className='Secondpart'>
      <div className='formside'>
      <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
      <label htmlFor="selectPlaceholder">Select an option:</label>
      <select
        id="selectPlaceholder"
        name="selectPlaceholder"
        className='slectoption'
      >
        <option value=""className='disbaled' disabled selected hidden>Select an option</option>
        <option value="option1">Student Assignment</option>
        <option value="option2">Buissness Website</option>
        <option value="option3">E-Commerce Website</option>
      </select>

      <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <label htmlFor="name">Purpose:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
      <div className='happensnext'>
        <div className='after'> 
        <h2>After Submitting</h2>
        </div>
        <h4 className='nextsteps'>Our business development team contacts you within two working days</h4>
        <h4 className='nextsteps'>A discovery session is held to understand your project requirements</h4>
        <h4 className='nextsteps'>A software development agreement is signed based on mutually agreed terms of the proposal via UPWORK.</h4>
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
