import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/tracklist';


class Playlist extends React.Component {
    render ()  {

        const { searchResults } = this.props

        return (
        <div className="Playlist">
            <input value="New Playlist"/>
            <TrackList searchResults={searchResults}/>
            {/* Add a TrackList component */}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
}


export default Playlist;