import React from 'react'
import './about.css'

import Photo from '../assets/images/msoto.jpg'


const About = () => {
    return (
        <div className='main-about' id='main'>
            <div className="about-container">

                <div className="about-image"> <img src={Photo} alt="msoto" height='300px' /></div>
                <div className="text-container">
                    <p>Motivated new developer seeking employment in this industry. Bringing forth a motivated attitude and the desire to learn. Committed to utilizing my skills to further the mission of a company. Currently learning and improving my javascript skills and learning React.

                    </p>
                </div>
            </div>

        </div>
    )
}

export default About