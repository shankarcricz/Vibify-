import React from "react";
import { useFetchAlbumsByArtistQuery, useFetchSongsByArtistQuery } from "../store";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { featuredAlbums } from "./JsonData";
import {AiOutlinePlayCircle} from 'react-icons/ai';

const FeatureSongs = () => {
    // const {data} = useFetchSongsByArtistQuery('DKZ');
    // console.log(data.results[0]);
    
   
    const data = featuredAlbums

    const songs = data.map((album, index) => {
        return (
            <div className="col-lg-4 col-md-6 col-12 album-card" key={album.id}>
                <div className="row g-0">
                    <div className="col-3">
                        <img height="100%" width="100%" src={album.image} alt="" />
                    </div>
                    <div className="col-9 title" >
                        <div className="row">
                            <div className="col-8"><h5>{album.name}</h5></div>
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