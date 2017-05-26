import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth) {
        return React.createElement(component, props);
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);
