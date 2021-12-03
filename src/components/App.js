import React from 'react';
import SongList from './SongList';

const App = () => {
    return (
        <div style={{ marginTop: "20px" }}>
            <div className="ui container grid">
                <div className="ui row">
                    <div className="ui column eight wide">
                        <SongList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;