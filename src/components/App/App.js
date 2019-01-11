import React, { Component } from 'react';
import './App.css';
import '../SearchBar/searchbar';
import '../SearchResults/searchresults';
import '../Playlist/playlist';
import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';
import Playlist from '../Playlist/playlist';
import Spotify from '../../util/spotify'
import 'semantic-ui-css/semantic.min.css'


Spotify.getAccessToken();

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      searchResults: [],
      playListName: "Top List",
      playListTracks: []
      }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName= this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this); 
      this.search = this.search.bind(this);
     }


  addTrack (track) {
    let tempPlaylist = this.state.playListTracks;
    if(this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else { 
      tempPlaylist.push(track);
      this.setState ({playListTracks: tempPlaylist})
    }
  }

  removeTrack (track) {
    const tempPlaylist= this.state.playListTracks;
    const newPlaylist = tempPlaylist.filter(removeTrack => removeTrack.id !== track.id);
    this.setState ({playListTracks: newPlaylist});
    }

    updatePlaylistName(name) {
    this.setState({playListName: name})
  }  
  
  savePlaylist () {

    const trackURIs = this.state.playListTracks.map(track => {return track.uri});
    Spotify.savePlaylist(this.state.playListName, trackURIs)
    this.setState((prevState) => {
        return {
          playlistName: 'New Playlist',
          playlistTracks: []
      }
     },
       /*  () => {this.updatePlaylistName('New Playlist')} */
      );
  }

    search(term){
      Spotify.search(term)
      .then(searchResults => this.setState({
        searchResults: searchResults
      }));
    }

  render() {

    const {searchResults, playListName, playListTracks} = this.state
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults searchResults={searchResults} onAdd={this.addTrack}/>
              <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playListName={playListName} playListTracks={playListTracks}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
