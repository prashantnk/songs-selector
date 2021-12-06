import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import ClickCounter from './ClickCounter';

const App = () => {
    return (
        <div style={{ marginTop: "20px" }}>
            <div className="ui container grid">
                <div className="ui row">
                    <div className="ui column ten wide">
                        <SongList />
                    </div>
                    <div className="ui column six wide">
                        <SongDetail />
                    </div>
                </div>
                <div className="ui row">
                    <div className="ui column ten wide">
                        <ClickCounter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;