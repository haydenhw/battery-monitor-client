import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import DashboardView from '../Dashboard/DashboardView'
import CreateAlertsView from "../CreateAlertsView";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Link to="/" className="mr-3">Dashboard</Link>
          <Link to="/alerts">Alerts</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <DashboardView/>
          </Route>
          <Route path="/alerts">
            <CreateAlertsView/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
