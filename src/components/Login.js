import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'preact-material-components/Card';
import Textfield from 'preact-material-components/Textfield';
import Button from 'preact-material-components/Button';

const Container = styled.div`
  background-color: gray;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Card style={{ backgroundColor: 'white', padding: '1em' }}>
          <Card.CardPrimary>
            <Card.Title>Love Treasury</Card.Title>
            <Card.Subtitle>Login</Card.Subtitle>
          </Card.CardPrimary>
          <Textfield label="Username" />
          <Textfield label="Password" />
          <Card.Actions>
            <Button ripple accent raised>Login</Button>
          </Card.Actions>
        </Card>
      </Container>
    );
  }
}
