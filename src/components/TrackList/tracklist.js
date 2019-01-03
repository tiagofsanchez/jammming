import React from 'react';
import './tracklist.css';
import Track from '../Track/track';

class TrackList extends React.Component {
    render () {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                  return <Track track={track}/>  
                })}
                {/* <Track /> */} 
                {/* You will add a map method that renders a set of Track components */} 
            </div>
        )
    }
}

export default TrackList;