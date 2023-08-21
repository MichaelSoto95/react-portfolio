import React from 'react'
import './logo-loader.css'
import logo from './images/logo.svg'
const LogoLoader = () => {
    return (
        <div className='animation'>
            <img src={logo} alt="logo" width='100px' />
        </div>
    )
}

export default LogoLoader
