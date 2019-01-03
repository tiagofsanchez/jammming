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
      searchResults: []
      }
  

  }
  
  
  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar  />
            <div className="App-playlist">
              <SearchResults searchresults={this.state.searchResults}/>
              <Playlist/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
