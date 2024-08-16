import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import CardActions from '@mui/material/CardActions';
import {forwardRef} from "react";
import { Paper } from "./paper";
import song from '../assets/Music/srija.mp3'
// import { MusicPlayer} from './Music'
import Card from '@mui/material/Card';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
export const FinalText = ()=>{
   
  
    return (
      <div>
        <section className="absolute grid min-h-screen w-full place-content-center overflow-hidden bg-paper">
        <Paper className="relative"  />
      </section>
      <div className=" absolute">
      {/* <MusicPlayer song={song}/> */}
      {/* {true ? <MusicPlayer song={song}/>:null} */}
      </div>
      </div>
      
    );
}

const MusicPlayer = ({ song }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src={song} controls />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
};

