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

const favoriteSongReducer = (favoriteSong = null, action) => {
    if (action.type === 'SELECT_FAVORITE') {
        return action.payload;
    }
    else return favoriteSong;
};

const counterReducer = (count = 0, action) => {
    if (action.type === "CHANGE_COUNT") {
        return count + action.payload;
    }
    return count;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer,
    favoriteSong: favoriteSongReducer,
    count: counterReducer
});