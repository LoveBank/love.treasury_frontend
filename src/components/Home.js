import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Intro = styled.p`
  font-size: large;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <h2>Welcome to React</h2>
      </Header>
      <Intro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </Intro>
    </Container>
  );
}
