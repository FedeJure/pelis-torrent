import React, { useEffect } from 'react';
import './PlayerView.css';

const PlayerView = ({torrentId, poster}) => {

  const container = <div id="player" className="PlayerView"></div>;

  useEffect(() => {
    const playerOptions = {
        id: 'player',
        magnet: torrentId,
        on: function(e) {
            if (e.name === window.webtor.TORRENT_FETCHED) {
                console.log('Torrent fetched!')
            }
            if (e.name === window.webtor.TORRENT_ERROR) {
                console.log('Torrent error!')
            }
        },
        poster: 'https://via.placeholder.com/150/0000FF/808080?Text=Sintel'
    };
    
    document.getElementById("player").childNodes.forEach(node => {
      if (node.id.includes("webtor")) node.parentNode.removeChild(node)
    })
    window.webtor.push(playerOptions);

  });

  return (
    container
  );
  

}

export default PlayerView;