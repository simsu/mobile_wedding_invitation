import { useEffect, useRef, useState } from 'react';
import Volume from '@/assets/icons/volume.svg';
import VolumeOff from '@/assets/icons/volume-off.svg';

function AudioButton() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayAudio = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch {
          setIsPlaying(false);
        }
      }
    };

    useEffect(() => {
      playAudio();
    }, []);

    return (
        <div style={{position: 'absolute', top: '0', right:'0'}}>
          <button onClick={handlePlayAudio} className='cursor-pointer'>
            <img src={isPlaying ? Volume : VolumeOff} alt="audio" />
          </button>
          <audio ref={audioRef} src="/bgm.mp3" loop></audio>
        </div>
    )
}

export default AudioButton;
