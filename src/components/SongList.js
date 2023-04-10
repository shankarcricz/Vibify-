import React from "react";
import { addCurrent, useFetchSongsByArtistQuery } from "../store";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

const SongList = (props) => { //artist
    const { data, isLoading, isFetching } = useFetchSongsByArtistQuery(props.artist);
 
    const dispatch = useDispatch();
    const handleClick = (obj, image) => {
        let newObj = { ...obj, image: image }
        dispatch(addCurrent(newObj))
    }
 

    const listy = data?.results[0]?.tracks;
    const mapper = listy && listy.map(obj => {
        return (
            <div className="col-lg-3 col-md-6 col-6 mt-2">
                 <div className="card" onClick={() => handleClick(obj, data?.results[0]?.image)}>
                    <Image src={data?.results[0]?.image} fluid rounded />
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
            <h3 className="text-light">{props.artist}</h3>
            <div className="row">
                {mapper}
            </div>
        </>

    );
}

export default SongList;