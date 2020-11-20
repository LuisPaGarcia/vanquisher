import './assets/main.css'
import React from 'react'
import Landing from './app/components/landing/'
import Dashboard from './app/components/dashboard'
import NotFound from './app/components/NotFound'
import Callback from './app/components/Callback'
import ProtectedRoute from './app/components/ProtectedRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
  )
}

export default App
