import React from 'react'
import './footer.css'
import { FaInstagram as Insta, FaGithub as Git, FaLinkedin as Linked } from "react-icons/fa";
import Logo from '../assets/images/logo.svg'
const Footer = () => {
  const year = new Date().getFullYear()
  return (

    <div className='footer'>


      <div className="logo-container"><img src={Logo} alt="" height='25px' /> <h3>Michael.Soto &copy; {year}</h3></div>
      <div className="social">
        <a href="" className='social-icon' target='blank'><Insta /></a>
        <a href="https://github.com/MichaelSoto95" className='social-icon' target='blank'><Git /></a>
        <a href="https://www.linkedin.com/in/michael-soto-7789a1263/" className='social-icon' target='blank'><Linked /></a>
      </div>


    </div>
  )
}

export default Footer
