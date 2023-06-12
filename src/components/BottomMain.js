import React from "react";
import { useFetchSongsByArtistQuery } from "../store";
import { artists } from "./JsonData";
import SongList from "./SongList";

const BottomMain = () => {


    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) { 
       
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
                       
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
           
        return array;
     }
    const singers = shuffleArray(artists);
    

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