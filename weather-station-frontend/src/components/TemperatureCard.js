import React from 'react';
import Thermometer from 'react-thermometer-component';

const TemperatureCard = ({ temperature }) => {
    return (
        <div className="card red hoverable data-card">
            <div className="card-content align-center">
                <span className="card-title center white-text">Temperature</span>
                <Thermometer
                    size="small"
                    value={temperature}
                    format="°C"
                    height={110}
                />
            </div>
        </div>
    )
}

export default TemperatureCard;