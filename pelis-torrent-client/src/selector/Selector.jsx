import React from 'react';
import "./Selector.css";

const Selector = ({torrents, setTorrent}) => {
    return (
        <div className="movie-selector">
            <div className="header">
                <img src="./missing-file.png"/>
                <div>
                    <h5>Movie title</h5>
                    <span>More detailed information about movie</span>
                </div>
            </div>
            <div className="options">
                {torrents.map(torrent => <button key={torrent.hash} onClick={() => setTorrent(torrent)}><span className="text">{torrent.quality}</span></button>)}
            </div>
        </div>
    );
};

export default Selector;