import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerView from '../player/PlayerView';
import SearchBar from "../searchBar/SearchBar";

function App() {

  const [torrentId, setTorrentId] = useState('magnet:?xt=urn:btih:37E77490BC4F285DBFA837514715A20BD405A502&dn=Spider-Man%3A+Far+from+Home+%282019%29+%5BWEBRip%5D+%5B1080p%5D+%5BYTS%5D+%5BYIFY%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce');
  return (
    <div className="App">
      <SearchBar/>
      <PlayerView torrentId={torrentId}></PlayerView>
    </div>
  );
  

}

export default App;