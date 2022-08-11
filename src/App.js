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

  deleteSong = async (id) => {
    try {
      await axios.delete('http://127.0.0.1:8000/music/' + id + '/');   
      this.getSongs();
    } catch (err) {
      console.log(err);
    }
  }

  addSong = async (newSong) => {
    let id = this.state.songs.length
    let song = {
      id: id,
      title: newSong.title,
      artist: newSong.artist,
      album: newSong.album,
      genre: newSong.genre,
      release_date: newSong.release_date
    }
    try {
      await axios.post('http://127.0.0.1:8000/music/', song);
      this.setState({
        songs: [...this.state.songs, song],
      }, () => console.log(this.state.songs));
    } catch (err) {
      console.log(err);
    }
  }

  searchSong = async (search) => {
    let songs = this.state.songs;
    let foundSongs = this.searchedSong(songs, search.query);
    if (foundSongs === undefined){
      this.getSongs();
    } else {
      Promise.all(foundSongs.map(async (song, i) => {
        let response;
        try {
          response = await axios.get('http://127.0.0.1:8000/music/' + song[i].id + '/');
          return response.data
        } catch (err) {
          console.log(err);
        }
      })).then(response => {
        this.setState({
          songs: response
        })
        console.log(response);
      })
    }
  }