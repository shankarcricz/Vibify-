import React from "react";
import { useSelector } from "react-redux";
import Player from "./Player";
import { AccessToken } from "./AccessToken";
const SongList = () => {
    const songsList = useSelector(state => state.songsList)
    const songMapper = (songsList[0]?.tracks?.map(item => 
            <Player key={item.data.id} uri={item.data.uri} />
    ))

    return (
        <div>
            {songsList[0]?.albums?.totalCount}
            {songMapper}
        </div>
    );
}

export default SongList;