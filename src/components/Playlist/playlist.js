import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/tracklist';


class Playlist extends React.Component {
    render ()  {
        return (
        <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList />
            {/* Add a TrackList component */}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
}


export default Playlist;