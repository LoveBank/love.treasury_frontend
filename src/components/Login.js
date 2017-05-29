import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'preact-material-components/Card';
import Textfield from 'preact-material-components/Textfield';
import Button from 'preact-material-components/Button';
import { Route, Link } from 'react-router-dom';
import api from '../api/api';

const Container = styled.div`
  background-color: gray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Login extends Component {
  state = {
    email: '',
    name: '',
    password: '',
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  }

  onEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  }

  register = () => {
    api
      .register(this.state.name, this.state.email, this.state.password)
      .then(user => {
        console.log(user);
      });
  }

  login = () => {
    api.login(this.state.email, this.state.password).then(user => {
      console.log(user);
    });
  }

  render() {
    return (
      <Container>
        <Card style={{ backgroundColor: 'white', padding: '1em' }}>
          <Card.CardPrimary>
            <Card.Title>Love Treasury</Card.Title>
            <Card.Subtitle>Login</Card.Subtitle>
          </Card.CardPrimary>
          <Route
            component={() => (
              <Textfield label="Name" onChange={this.onNameChange} />
            )}
            exact
            path="/login/register"
          />
          <Textfield label="Email" onChange={this.onEmailChange} />
          <Textfield
            label="Password"
            type="password"
            onChange={this.onPasswordChange}
          />
            <Route
              component={() => (
                <Link to="/login/register">Register</Link>
              )}
              exact
              path="/login"
            />
            <Route
              component={() => (
                <Link to="/login">Login</Link>
              )}
              exact
              path="/login/register"
            />
          <Card.Actions>
            <Route
              component={() => (
                <Button ripple accent raised onClick={this.register}>
                  Register
                </Button>
              )}
              exact
              path="/login/register"
            />
            <Route
              component={() => (
                <Button ripple accent raised onClick={this.login}>Login</Button>
              )}
              exact
              path="/login"
            />
          </Card.Actions>
        </Card>
      </Container>
    );
  }
}
