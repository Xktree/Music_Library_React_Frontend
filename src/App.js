import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic.jsx';
import SongTable from './Components/SongTable/SongTable.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
