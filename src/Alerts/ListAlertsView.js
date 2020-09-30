import React from 'react';
import { Link } from 'react-router-dom';

function CreateAlertsView() {
    return (
        <div className="v-container position-relative vh-100 border border-primary">
            <h1 className="mb-4">Alert Policies</h1>
            <div className="alert-list">
                <div className="alert-item shadow mb-3 p-3">
                    <h2>Battery Halfway</h2>
                    <div>Voltage below 12.5V</div>
                </div>
                <div className="alert-item shadow mb-3 p-3">
                    <h2>Battery Halfway</h2>
                    <div>Voltage below 12.5V</div>
                </div>
            </div>
            <div className="v-bottom-button-container v-container">
                <Link
                    className="btn btn-primary v-bottom-button"
                    to="/create-alerts"
                    role="button"
                >
                    Create New Policy
                </Link>
            </div>
        </div>
    );
}

export default CreateAlertsView;
