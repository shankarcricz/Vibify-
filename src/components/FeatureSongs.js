import React from "react";
import { addCurrent, useFetchAlbumsByArtistQuery, useFetchSongsByArtistQuery } from "../store";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { artists, featuredAlbums } from "./JsonData";
import {AiOutlinePlayCircle} from 'react-icons/ai';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";


const FeatureSongs = () => {
    // const {data} = useFetchSongsByArtistQuery('DKZ');
    // console.log(data.results[0]);
    const randomN = Math.floor(Math.random() * artists.length);
    const [album, setAlbum] = useState(null);
    const [artist, setArtist] = useState(artists[randomN]);

    useEffect(() => {
        const fetchSongsByArtist = async () => {
          try {
            const response = await axios.get(
              `https://api.jamendo.com/v3.0/albums/tracks/?client_id=0db4c8f4&format=jsonpretty&limit=1&artist_name=${artist}`
            );
            let data = response?.data?.results[0];
            if(data?.tracks?.length > 6) data.tracks = data.tracks.slice(0,5);
            setAlbum(data);
          } catch (error) {
            // Handle any error that occurs during the API request
            console.error("Error fetching songs:", error);
          }
        };
    
        fetchSongsByArtist();
      }, [artist]);

      const dispatch = useDispatch();
    const handleClick = (alb, image) => {
        dispatch(addCurrent({...alb,image}))
    }


    const songs = album?.tracks?.map((alb, index) => {
        return (
            <div
            onClick={() => handleClick(alb, album.image)}
            className="col-lg-4 col-md-6 col-12 album-card" key={album.artist_id}>
                <div className="row g-0">
                    <div className="col-3">
                        <img height="100%" width="100%" src={album.image} alt="" />
                    </div>
                    <div className="col-9 title" >
                        <div className="row">
                            <div className="col-8"><h5>{album.artist_name}</h5></div>
                            <div className="col-2 mt-2 mr-2 playBtn"><AiOutlinePlayCircle size={30} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        )

    })
    return (
        <div className="container">
            <div className="row">
            {songs}
            </div>
            


        </div>
    );
}
export default FeatureSongs;