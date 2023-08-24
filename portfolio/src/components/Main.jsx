import React from 'react'
import './main.css'
import Type from './Type'

const Main = () => {
    return (
        <div className='main' id='main'>
            <div className="main-container">
                <h1> <span className='purple'>HELLO!</span> <Type /> </h1>
            </div>

        </div>
    )
}

export default Main
