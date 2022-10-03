import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
import logo from  './logo.jpg'


function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div className="left">
                <img src={logo} alt="logo" />
                <span>WebZone</span>
                <h1>hello</h1>
            </div>
            <div className="right">
                <ul>
                    <Link style={{color : 'purple'}} className='link' to= '/'>start</Link>
                    <li>about us</li>
                    <li>services</li>
                    <Link className='link' to= '/task' >todo's</Link>
                    <li>contact</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar