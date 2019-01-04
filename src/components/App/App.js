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

      playListName: "Top List",
      

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
      this.updatePlaylistName= this.updatePlaylistName.bind(this);
  }

  /* I am not sure what this here is doing and I think this is wrong, need to check with Diogo*/
  addTrack (track) {
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
    }

  /* I dont't get how to code this method */    
  removeTrack (track) {
    }

  updatePlaylistName(name) {
    this.setState({playListName: name})
  }  


  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar  />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playListName={this.state.playListName} playListTracks={this.state.playListTracks}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
