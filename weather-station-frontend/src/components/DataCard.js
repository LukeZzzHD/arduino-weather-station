import React from 'react';

const DataCard = ({ label, value, unit }) => {
    return (
        <div className="col s12 m4 l4">
            <div className="card hoverable data-card">
                <div className="card-content align-center">
                    <span className="card-title center">{label}</span>
                    <h3 className="center">{value} {unit}</h3>
                </div>
            </div>
        </div>
    )
}

export default DataCard;