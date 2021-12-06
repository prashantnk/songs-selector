import React from "react";
import { connect } from "react-redux";
import useId from "../hooks/useId";
import { selectSong, selectFavorite } from "../actions";

const SongList = (props) => {
    const getId = useId();
    const songList = props.songs.map((song) => {
        return (
            <div key={getId()} className="item">
                <div className="right floated content">
                    <button className="ui button primary" onClick={() => props.selectSong(song)}>Select</button>
                    <button className="ui button" onClick={() => { props.selectFavorite(song) }}>Make Favorite</button>
                </div>
                <div className="ui header">
                    {song.title}
                    <div className="description">
                        {props.favoriteSong && song.title === props.favoriteSong.title ? "Your Favorite !" : ""}
                    </div>
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
    return {
        songs: state.songs,
        favoriteSong: state.favoriteSong
    };
}
export default connect(mapStateToProps, {
    selectSong,
    selectFavorite
})(SongList);