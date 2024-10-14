import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css' // Import the CSS file

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active"> About </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active"> Contact </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
