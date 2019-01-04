import React from 'react';
import './tracklist.css';
import Track from '../Track/track';

class TrackList extends React.Component {
    render () {
        /* const {tracks} = this.props se eu quiser tirar o this.props no codigo */
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <Track key={track.id} track={track} onAdd={this.props.onAdd}/>
                    })}
                {/* <Track /> */} 
                {/* You will add a map method that renders a set of Track components */} 
            </div>
        )
    }
}

export default TrackList;