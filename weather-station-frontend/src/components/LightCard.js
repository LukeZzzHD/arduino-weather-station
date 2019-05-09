import React from 'react';

const LightCard = ({ light }) => {
    return (
        <div className="card yellow darken-2 hoverable data-card">
            <div className="card-content align-center">
                <span className="card-title center">Light</span>
                <h3 className="center">{ light }</h3>
            </div>
        </div>
    )
}

export default LightCard;