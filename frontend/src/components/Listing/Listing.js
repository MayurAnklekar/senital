import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Listing.css'
const Listing = () => {
    const [propertyData, setPropertyData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/mongo/property/findAll").then((response) => {
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            setPropertyData(response.data);
        });
    }, []);
    return <div>{
        propertyData.map(p=>(
            <div className="card">
                <div className="card_img">
                    <img src={p.image} width="350px" height="350px"></img>
                </div>
                <div className="card_body">
                    <h2>Location: {p.location}</h2>
                    <h3>Rent: {p.price}</h3>
                </div>
            </div>
        ))
    }</div>;
};

export default Listing;
