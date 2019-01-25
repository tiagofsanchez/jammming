import React from 'react';
import './track.css'



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

    playMusic() {
        var a = new Audio();
        a.src= this.props.track.preview;
        a.pause();
        a.play();
    }
    
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        const { track , isRemoval } = this.props
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album} </p>
                </div>
                <div className="Track-preview">
                    {track.preview && !isRemoval ? 

                    <button className="Track-action" onClick={this.playMusic()}>preview</button>
                    : 
                    null}
                </div>
                <a className="Track-action">{this.renderAction()}</a>
            </div>
        )
    }
}

export default Track;