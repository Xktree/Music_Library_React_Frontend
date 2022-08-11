import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic.jsx';
import SongTable from './Components/SongTable/SongTable.jsx';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    this.getSongs();
  }
  
  getSongs = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/music/');   
      console.log(response.data);
      this.setState({
        songs: response.data
      });
    } catch (err) {
      console.log(err);
    }
  }
