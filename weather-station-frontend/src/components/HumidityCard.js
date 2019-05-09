import React from 'react';

const HumidityCard = ({ humidity }) => {
    return (
        <div className="card blue hoverable data-card">
            <div className="card-content align-center">
                <span className="card-title center white-text">Humidity</span>
                <h3 className="center white-text">{ humidity }</h3>
            </div>
        </div>
    )
}

export default HumidityCard;