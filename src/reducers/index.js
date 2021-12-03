import { combineReducers } from 'redux';
const songsReducer = () => {
    return [
        { title: "See You Again", duration: "2:04" },
        { title: "Sorry", duration: "3:50" },
        { title: "Uptown Funk", duration: "5:20" },
        { title: "Blank Space", duration: "4:04" }
    ];
};

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
});