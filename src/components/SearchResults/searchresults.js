import React from 'react';
import './searchresults.css';
import TrackList from '../TrackList/tracklist';


class SearchResults extends React.Component {
  render () {

    const { searchResults } = this.props

    return (
        <div className="SearchResults">
          <h2>Results</h2>
          <TrackList 
            searchResults={searchResults}
          />
        </div>
    )
  }
}


export default SearchResults;