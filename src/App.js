import './assets/main.css';
import React from 'react';
import Landing from './app/landing/';
import Dashboard from './app/dashboard';
import NotFound from './components/NotFound';
import Callback from './components/Callback';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/callback" component={Callback} />
        <ProtectedRoute
          path="/dashboard"
          component={() => <Dashboard {...props} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
