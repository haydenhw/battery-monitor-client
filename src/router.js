import { Route, Switch } from 'react-router-dom';
import DashboardView from './Dashboard/DashboardView';
import CreateAlertsView from './Alerts/CreateAlertsView';
import ListAlertsView from './Alerts/ListAlertsView';
import React from 'react';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <DashboardView />
            </Route>
            <Route path="/alerts">
                <ListAlertsView />
            </Route>
            <Route path="/create-alerts">
                <CreateAlertsView />
            </Route>
        </Switch>
    );
}
