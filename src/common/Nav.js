import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav() {
    return (
        <div className="nav v-container h-12">
            <li className="nav-item">
                <Link to="/" className="nav-link mr-3">
                    Dashboard
                </Link>
            </li>
            <Link to="/alerts" className="nav-link">
                Alerts
            </Link>
        </div>
    );
}
