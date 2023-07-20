import React from 'react'
import '../components/navbar.css'
import { useState } from 'react'

const NavBar = () => {

    const [openNav, SetOpenNav] = useState(false)
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="logo-container">
                    <div className='icon'></div>
                    <div className="logo">Michael<span className='black'>.</span>Soto</div>
                </div>

                <ul className={openNav ? 'nav-list active' : 'nav-list'} >
                    <li className='nav-list-item'>Home</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
                <div className="burger-menu">
                    <button onClick={() => SetOpenNav(!openNav)}>{openNav ? 'X' : '|||'}</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
