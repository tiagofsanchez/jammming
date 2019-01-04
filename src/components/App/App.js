import React, { Component } from 'react';
import './App.css';
import '../SearchBar/searchbar';
import '../SearchResults/searchresults';
import '../Playlist/playlist';
import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';
import Playlist from '../Playlist/playlist';



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "I would love to sing",
          artist: "Tiago", 
          album: "The WORST ABLBUM EVER", 
          id: 1,
        },
        {
          name: "I would love to sing",
          artist: "Tiago", 
          album: "The WORST ABLBUM EVER",
          id: 2,
        },
        {
          name: "I would love to sing",
          artist: "Tiago", 
          album: "The WORST ABLBUM EVER",
          id: 2,
        },
      ],

      playListName: {
        name: "Top List"
      },

      playListTracks: [
        {
          name: "I would love to sing",
          artist: "Tiago", 
          album: "The WORST ABLBUM EVER", 
          id: 3,
        },
        {
          name: "I would love to sing",
          artist: "Tiago", 
          album: "The WORST ABLBUM EVER",
          id: 4,
        }, 
      ]
      }


      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
  }

  /* I am not sure what this here is doing and I think this is wrong, need to check with Diogo*/
  addTrack (track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    }

  removeTrack (track) {

  }  


  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar  />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
