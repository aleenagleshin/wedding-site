'use client';
import { useEffect, useState } from 'react';

function pad(n:number) { return String(n).padStart(2,'0'); }

export default function Countdown() {
  // target: Oct 19, 2025 10:30 local time
  const target = new Date(2025, 9, 19, 10, 30, 0).getTime(); // month is 0-indexed, so 9 = October
  const [now,setNow] = useState(Date.now());
  useEffect(()=>{
    const t = setInterval(()=> setNow(Date.now()), 1000);
    return ()=> clearInterval(t);
  },[]);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor(diff / (1000*60*60) % 24);
  const mins = Math.floor(diff / (1000*60) % 60);
  const secs = Math.floor(diff / 1000 % 60);
  return (
    <div className="text-center py-12">
      <h2 className="text-4xl md:text-5xl font-serif mb-4">UNTIL THE BIG DAY</h2>
      <div className="text-6xl md:text-8xl font-bold tracking-wide">{pad(days)}:{pad(hours)}:{pad(mins)}:{pad(secs)}</div>
      <div className="flex justify-center gap-8 mt-4 text-sm uppercase tracking-widest">
        <div>Days</div><div>Hours</div><div>Mins</div><div>Secs</div>
      </div>
    </div>
  );
}
