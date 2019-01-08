import React, { Component } from 'react';
import './tracklist.css';
import Track from '../Track/track';

class TrackList extends Component {

  constructor(props) {
    super(props)
  }
  
  render () {

    const { searchResults } = this.props

    console.log(searchResults)

    return (
      <div className="TrackList">
          {searchResults.map(track => {
            return <Track track={track}/>
          })}
          {/* <Track /> */}
          {/* You will add a map method that renders a set of Track components */}
      </div>
    )
  }
}

export default TrackList;