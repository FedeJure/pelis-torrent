import React, { useState } from 'react';
import './App.css';
import PlayerView from '../player/PlayerView';
import SearchBar from "../searchBar/SearchBar";
import Selector from '../selector/Selector';

function App() {
  const [torrent, setTorrent] = useState({});
  const [selectedMovie, setSelectedMovie] = useState({});

  const onChange = (selectedMovie) => {
      setSelectedMovie(selectedMovie);
  }

  return (
    <div className="App">
      <SearchBar onChange={onChange} className="searchBar"/>
      {selectedMovie.torrents && selectedMovie.torrents.length > 0 && <Selector torrents={selectedMovie.torrents} setTorrent={setTorrent}/>}
      {torrent.hash && <PlayerView torrentId={torrent.hash} image={selectedMovie.image}></PlayerView>}
    </div>
  );
  

}

export default App;