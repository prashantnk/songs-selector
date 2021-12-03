import React from "react";
import { connect } from "react-redux";
import useId from "../hooks/useId";
import { selectSong } from "../actions";

const SongList = (props) => {
    const getId = useId();
    const songList = props.songs.map((song) => {
        return (
            <div key={getId()} className="item">
                <div className="right floated content">
                    <button className="ui button primary" onClick={() => props.selectSong(song)}>Select</button>
                </div>
                <div className="ui header">
                    {song.title}
                </div>
            </div>
        );
    });
    return (
        <div className="ui divided list" >
            {songList}
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs: state.songs
    };
}
export default connect(mapStateToProps, {
    selectSong
})(SongList);