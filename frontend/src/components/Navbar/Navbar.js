import React from "react";
import './Navbar.css'
const Navbar=() =>{
    return (
        <nav>
            <ul className="list">
                <li className="items">Home</li>
                <li className="items">Services</li>
                <li className="items">Contact</li>
            </ul>
            <button className="btn">BTN</button>
        </nav>
    )
}

export default Navbar;