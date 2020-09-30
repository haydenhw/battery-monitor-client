import React from 'react';
import './App.css';
import Nav from '../common/Nav';
import Routes from '../router';

function App() {
    return (
        <div className="app v-container">
            <div className="app-title mb-4">
                <h1>Battery Monitor</h1>
            </div>
            <Routes />
        </div>
    );
}

export default App;
