import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Login} exact path="/login" />
          <Route component={Home} exact path="/" />
        </div>
      </Router>
    );
  }
}

export default App;
