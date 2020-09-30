import React from 'react';
import './DashboardView.css';

function DashboardView() {
    return (
        <div className="dashboard-view">
            <div className="dashboard-card mb-3 v-card">
                <div className="card-body">
                    <h2>Present</h2>
                    <div className="dashboard-reading">
                        <span className="voltage-value v-large-font">12.6</span>
                        <span className="voltage-unit">V</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardView;
