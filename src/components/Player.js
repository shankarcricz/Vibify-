import React from "react";
import  SpotifyPlayer from 'react-spotify-web-playback';



function Player(props) {
  const token = localStorage.getItem('accessToken');
  const trackUri = props.uri;
  return (
    <SpotifyPlayer
      token={token}
      uris={[trackUri]}
      autoPlay={true}
      play={true}
      
    />
  );
}


export default Player;