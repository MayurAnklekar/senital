import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Listing from '../Listing/Listing'
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