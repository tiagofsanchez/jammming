import React from 'react';
import './track.css'
import { Label } from 'semantic-ui-react';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval)
            return (<a className="Track-action" onClick={this.removeTrack}>-</a>);
        else
            return (<a className="Track-action" onClick={this.addTrack} >+</a>);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        const { track } = this.props
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album} </p> 
                </div>
                {track.preview ? <audio controls src={track.preview}></audio> : null}
                <a className="Track-action">{this.renderAction()}</a>
            </div>
        )
    }
}

export default Track;