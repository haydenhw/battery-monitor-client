import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { renderedDive } from 'enzyme/src/Utils';
import { Link } from 'react-router-dom';
import './CreateAlertsView.css';

function CreateAlertsView() {
    return (
        <div className="v-container">
            <h1 className="mb-4">Create Alert Policy</h1>
            <section className="mb-4">
                <h2>Set Threshold</h2>
                <div>Whenever voltage</div>
                <div className="set-threshold-section">
                    <div>
                        <span>is</span>
                        <input
                            className="create-alert-input-big ml-1 mr-1"
                            type="text"
                            placeholder="below"
                        />
                        <input
                            className="create-alert-input-small mr-1"
                            type="text"
                            placeholder="12.4"
                        />
                        <span>V</span>
                    </div>
                    <div>
                        <span>for</span>
                        <input
                            className="create-alert-input-big ml-1 mr-1 mt-2"
                            type="text"
                            placeholder="5 minutes"
                        />
                    </div>
                </div>
            </section>
            <section className="mb-4">
                <h2>Send Alerts Via</h2>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Email</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">SMS</label>
                </div>
            </section>
            <section>
                <h2>Name and Create</h2>
                <input type="text" placeholder="Enter Policy Name" />
                <Link
                    className="btn btn-primary"
                    to="/create-alerts"
                    role="button"
                >
                    Create Policy
                </Link>
            </section>
        </div>
    );
}

export default CreateAlertsView;
