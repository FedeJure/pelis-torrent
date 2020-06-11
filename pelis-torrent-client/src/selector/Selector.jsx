import React from 'react';
import "./Selector.css";

const Selector = ({torrents, setTorrentId}) => {
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
                {torrents.map(torrent => <button onClick={() => setTorrentId(torrent.magnet)}><span className="text">{torrent.title}</span></button>)}
            </div>
        </div>
    );
};

export default Selector;