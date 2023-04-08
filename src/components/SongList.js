import React from "react";
import { useFetchSongsByArtistQuery } from "../store";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { AiOutlinePlayCircle } from "react-icons/ai";

const SongList = (props) => { //artist

    const { data, isLoading } = useFetchSongsByArtistQuery(props.artist);

    const listy = data?.results[0]?.tracks;
    const mapper =listy && listy.map(obj => {
        return (
            <div className="col-3 mt-2">
                <div className="card">
                <Image src={data?.results[0]?.image} fluid rounded/>
                <h5 className="text-light">{obj.name}</h5>
                <small className="text-muted">{obj.releasedate}</small>
                <div className="row">
                    <small className="col-9 text-muted">{obj.duration}s</small>
                    <span className="col-3 play"><AiOutlinePlayCircle size={30} /></span>
                    
                </div>
                </div>
                
            </div>
        );
    })

    return (
        <>
            <h3 className="text-light mt-2">{props.artist}</h3>
            <div className="row">
                {mapper}
            </div>
        </>

    );
}

export default SongList;