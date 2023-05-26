import React from "react";
import { useFetchSongsByArtistQuery } from "../store";
import { artists } from "./JsonData";
import SongList from "./SongList";

const BottomMain = () => {

    const singers = artists;

    return <div className="bottom-section">
        <div className="pt-2">
            {
                singers.map(artist => {
                    return(
                         <SongList artist={artist}/>
                    );
                })
            }
        </div>
    </div>;
}

export default BottomMain;