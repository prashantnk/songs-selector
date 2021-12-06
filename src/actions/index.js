//  Action creator

export const selectSong = (song) => {
    // return action
    return {
        type: 'SELECT_SONG',
        payload: song
    };
}

export const selectFavorite = (song) => {
    return {
        type: "SELECT_FAVORITE",
        payload: song
    };
}

export const changeCount = (delta) => {
    return {
        type: "CHANGE_COUNT",
        payload: delta
    };
}