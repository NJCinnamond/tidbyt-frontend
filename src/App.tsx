import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/headerComponent';
import { Container } from '@material-ui/core';
import { Main } from './components/main/mainComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </div>
  );
}

export default App;
