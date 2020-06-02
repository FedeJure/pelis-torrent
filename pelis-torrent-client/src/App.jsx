import React, { useState, useEffect } from 'react';
import './App.css';
import './PlayerView';
import PlayerView from './PlayerView';

function App() {

  const [torrentId, setTorrentId] = useState('magnet:?xt=urn:btih:37E77490BC4F285DBFA837514715A20BD405A502&dn=Spider-Man%3A+Far+from+Home+%282019%29+%5BWEBRip%5D+%5B1080p%5D+%5BYTS%5D+%5BYIFY%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce');

  useEffect(() => {
    // window.webtor = window.webtor || [];
    // const playerOptions = {
    //     id: 'player',
    //     magnet: torrentId,
    //     on: function(e) {
    //         if (e.name === window.webtor.TORRENT_FETCHED) {
    //             console.log('Torrent fetched!')
    //         }
    //         if (e.name === window.webtor.TORRENT_ERROR) {
    //             console.log('Torrent error!')
    //         }
    //     },
    //     poster: 'https://via.placeholder.com/150/0000FF/808080?Text=Sintel',
    //     subtitles: [
    //         {
    //             srclang: 'en',
    //             label: 'test',
    //             src: 'https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt',
    //         }
    //     ],
    // };
    // window.webtor.push(playerOptions);
  });
  setTimeout(() => setTorrentId("magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F"), 10000);
  return (
    <div className="App">
      {/* <div id="player"></div> */}
      <PlayerView id ="player" torrentId={torrentId}></PlayerView>
    </div>
  );
  

}

export default App;