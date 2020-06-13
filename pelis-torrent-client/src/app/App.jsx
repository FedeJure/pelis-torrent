import React, { useState } from "react";
import "./App.css";
import PlayerView from "../player/PlayerView";
import SearchBar from "../searchBar/SearchBar";
import Selector from "../selector/Selector";

function App() {
  const [torrent, setTorrent] = useState({});
  const [selectedMovie, setSelectedMovie] = useState({});

  const onChange = selectedMovie => {
    setSelectedMovie(selectedMovie);
  };

  const showSelector =
    selectedMovie.torrents && selectedMovie.torrents.length > 0;
  const showPlayer = torrent.hash;
  return (
    <div className="App">
      <SearchBar onChange={onChange} className="searchBar" />
      {showSelector && (
        <Selector
          image={selectedMovie.image}
          torrents={selectedMovie.torrents}
          setTorrent={setTorrent}
          details={selectedMovie.details}
          title={selectedMovie.title}
        />
      )}
      {showPlayer && (
        <PlayerView torrentId={torrent.hash} image={selectedMovie.image} />
      )}
    </div>
  );
}

export default App;
