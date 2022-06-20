import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.property.location}</h5>
                <img src={props.property.propertyURL} alt="property" />
                
            </div>
        </div>
    );
}

export default Card;