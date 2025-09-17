'use client';
import { Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';

export default function MusicPlayer({ src = '/music.mp3' }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => {
        if (!audioRef.current) return;
        if (playing) { audioRef.current.pause(); setPlaying(false); }
        else { audioRef.current.play(); setPlaying(true); }
      }} className="p-2 rounded-full text-white border shadow-sm ">
        {playing ? <Pause /> : <Play />}
      </button>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
