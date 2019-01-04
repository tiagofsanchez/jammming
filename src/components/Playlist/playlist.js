import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/tracklist';


class Playlist extends React.Component {
    render ()  {
        return (
        <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList tracks={this.props.playListTracks}/> 
            {/* Add a TrackList component -> Why I don't have to map() as we did for the tracklist  */}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
}


export default Playlist;