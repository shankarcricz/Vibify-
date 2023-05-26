import React, { useEffect, useState } from "react";
import './Player.css';
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import {IoIosSkipBackward, IoIosSkipForward} from "react-icons/io";
import { current } from "@reduxjs/toolkit";
import { IoIosMusicalNote } from "react-icons/io";
import { useRef } from "react";
import { addToStack } from "../store";

function Player() {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const dispatch = useDispatch();
 
  const {currentSong, color} = useSelector(state => state.songsList)
  const ref = useRef();
  
  const arr = color;
    useEffect(() => {
        const num = Math.ceil((Math.random() * 5))
        document.querySelector('.circle-rotate').style.background = `linear-gradient(180deg, ${arr[num]}, white)` ;
    }, [])

  useEffect(() => {
    setIsLiked(false)
    ref.current.play();
    setIsPlaying(true);
    dispatch(addToStack(currentSong))
    
  }, [currentSong.name])
  
  const handleClick = (e) => {
    
    if(!isPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
    setIsPlaying(prev => !prev)
   
  }
  

  return (
     currentSong && (<div className="player">
        <audio ref={ref} src={currentSong.audio} controls className="player d-none" style={{width:"30%"}}/>
        <div className="row">
          <div className="col-3">
            <div className="row" style={{padding: "10px"}}>
              <div className="col">
              <Image src={currentSong.image} fluid rounded/>
              </div>
              <div className="col">
                <span className="text-light">{currentSong.name}</span>
                <small className="text-muted"></small>
              </div>
              <div className="heart col mt-2" onClick={() => setIsLiked(prev => !prev)}>
                {
                  !isLiked? <AiOutlineHeart size={30} style={{cursor:"pointer"}} /> : <AiFillHeart size={30} style={{color:"green", cursor: "pointer"}} />
                }
              </div>
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="row">
            <div className="col ">
                <IoIosSkipBackward className="backwardBtn" size={30} />
              </div>
              <div className="col">
                {
                  isPlaying && currentSong.image ? <AiFillPauseCircle className="pauseButton" size={40} style={{color:"white"}} onClick={handleClick} /> :<AiFillPlayCircle className="playButton" size={40} style={{color:"white"}} onClick={handleClick} />

                }
              </div>
              <div className="col">
                <IoIosSkipForward className="forwardBtn" size={30} />
              </div>
            </div>
            <div className="row">
              <input type="range" id="range" />
            </div>
          </div>
          <div className="col-3 mt-4">
            <div id="row notes">
              <IoIosMusicalNote size={30} className="text-light" />
              <IoIosMusicalNote size={30} className="text-muted" />
              <IoIosMusicalNote size={30} />
            </div>
          </div>
        </div>
       
        <div className="circle-rotate">
          </div>
      </div>)
    );
}


export default Player;