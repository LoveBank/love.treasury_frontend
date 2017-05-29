import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Home from './components/Home';
import { Provider } from 'react-redux';
import history from './redux/history';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route component={Login} path="/login" />
            <Route component={Home} exact path="/" />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
