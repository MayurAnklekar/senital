import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from './Card'

const Listing = () => {
	const [properties, setProperties] = useState([{}]);

	useEffect(() => {
		axios.get("/api/mongo/property/findAll").then((response) => {
			console.log(response.data);
			setProperties(response.data);
		});
	}, []);

	const renderProperties = () => {
		return properties.map((property) => {
			return <div>{property.name}</div>;
		});
	};
	return <div>{properties.map(p => {
    return <Card property={p} />
  })}</div>;
};

export default Listing;
