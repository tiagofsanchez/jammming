import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/tracklist';


class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {

        const { playListName, playListTracks, onRemove, /* onSave */ onChoose } = this.props

        return (
            <div className="Playlist">
                <input value={playListName} onChange={this.handleNameChange} />
                <TrackList tracks={playListTracks} onRemove={onRemove} isRemoval={true} />
                <a className="Playlist-save" onClick={onChoose} >SAVE TO SPOTIFY</a>
            </div>

        )
    }
}


export default Playlist;