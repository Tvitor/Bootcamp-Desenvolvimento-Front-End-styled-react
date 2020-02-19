import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as styles from './styles';
function App() {
  return (
    <styles.Container >
      <styles.Header bg="black">
        <img src={logo}  className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </styles.Header>
    </styles.Container>
  );
}

export default App;
