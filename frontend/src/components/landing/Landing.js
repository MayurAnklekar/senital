import React from 'react'
import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Listing from '../Listing'
import './Landing.css'

const Landing = () => {
  return (
    <div className="navbar">
        <Navbar/>
        <Banner/>
        <Listing/>
    </div>
   
  );
}

export default Landing