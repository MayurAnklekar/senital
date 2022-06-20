import React from 'react'
import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Listing from '../Listing'

const Landing = () => {
  return (
    <div class="navbar">
        <Navbar/>
        <Banner/>
        <Listing/>
    </div>
   
  )
}

export default Landing