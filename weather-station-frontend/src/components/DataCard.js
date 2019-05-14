import React from 'react';

const DataCard = ({ label, value }) => {
    return (
        <div className="card hoverable data-card">
            <div className="card-content align-center">
                <span className="card-title center">{ label }</span>
                <h3 className="center">{ value }</h3>
            </div>
        </div>
    )
}

export default DataCard;