import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/tracklist';


class Playlist extends React.Component {
    constructor (props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange (event) {
        this.props.onNameChange(event.target.value); 
    }
    
    render ()  {
        return (
        <div className="Playlist">
            <input value={this.props.playListName} onChange={this.handleNameChange}/>
            <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true} /> 
            {/* Add a TrackList component -> Why I don't have to map() as we did for the tracklist  */}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
}


export default Playlist;