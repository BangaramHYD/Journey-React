// import React, { useRef } from 'react';
// import Enchanted from '../assets/Music/Enchanted.mp3'
// export const MusicPlayer = () => {
//   const audioRef = useRef(null);

//   const playAudio = () => {
//     audioRef.current.play();
//   };

//   const pauseAudio = () => {
//     audioRef.current.pause();
//   };

//   return (
//     <div>
//       <audio ref={audioRef}>
//         <source src={Enchanted} type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//       <div className=' flex justify-end'>
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       <button onClick={playAudio}>Play</button>
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       &nbsp;
//       <button onClick={pauseAudio}>Pause</button>
//       </div>
     
//     </div>
//   );
// };

// export default MusicPlayer;
import React, { useRef,useEffect} from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './CustomAudioPlayer.css';
import AudioPlayer from 'react-h5-audio-player';
// import song from '../assets/Music/srija.mp3'
export const MusicPlayer = ({song}) => (
  <div style={{ width: '300px'}}>
    <AudioPlayer
      autoPlay={true}
      src={song}
      onPlay={e => console.log("Playing...")}
    />
  </div>
);


export const MusicPlayer2 = ({song})=>{
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        
        console.error("Audio playback failed:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef}>
      <source src={song} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}

export const MusicConst = ()=>(
  <div style={{ width: '300px'}}>
    <AudioPlayer
      
      src={song}
      onPlay={e => console.log("Playing...")}
    />
  </div>
)