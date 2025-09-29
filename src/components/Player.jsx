// src/components/Player.jsx

import { useState, useRef, useEffect } from 'react';
import { STREAM_URL, COVER_ART } from '../config';
import { Play, Pause, Volume2, VolumeX, Clock } from 'lucide-react';
import ElasticSlider from './ElasticSlider';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isOnAir, setIsOnAir] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const isWeekday = day >= 1 && day <= 5;
      const isStartingEarly = hour === 20 && minutes >= 50;
      const isPrimeTime = hour === 21;
      const isEndingLate = hour === 22 && minutes < 10;
      if (isWeekday && (isStartingEarly || isPrimeTime || isEndingLate)) {
        setIsOnAir(true);
      } else {
        setIsOnAir(false);
      }
    };
    checkTime();
    const intervalId = setInterval(checkTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (!isOnAir || !audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Error al reproducir audio:", error));
    }
    setIsPlaying(!isPlaying);
  };
  
  if (!STREAM_URL) {
    return (
      <section id="player" className="section-container">
        <div className="text-center p-8 bg-yellow-900/50 border border-yellow-500 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-title text-2xl text-yellow-300">Stream no configurado</h3>
          <p className="mt-2 text-yellow-200">El administrador del sitio debe configurar la variable `VITE_STREAM_URL` en el archivo .env para habilitar el reproductor.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="player" className="container mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24">
      <p className="text-center font-semibold text-gray-200 text-lg mb-6 tracking-wider">
        Lunes a Viernes de 21:00 a 22:00 hs.
      </p>

      <div className="max-w-lg mx-auto bg-brand-dark p-6 md:p-8 rounded-lg shadow-2xl border border-brand-purple/30">
        <div className="flex items-center gap-6">
          <img src={COVER_ART} alt="Cover Art" className="w-28 h-28 rounded-md shadow-lg" />
          <div className="flex-1">
            <p className="text-base text-gray-400">Ahora en Universo 8090</p>
            <h3 className="text-xl font-bold text-white truncate">Cargando metadata...</h3>
            <p className="text-lg text-gray-300">Stream en vivo</p>
          </div>
        </div>
        
        {/* 👇 CAMBIO AQUÍ: Aumentamos el espacio con gap-8 👇 */}
        <div className="mt-6 flex items-center justify-center gap-20">
          <button 
            onClick={togglePlayPause} 
            className="btn btn-primary p-4 rounded-full disabled:bg-gray-600 disabled:shadow-none disabled:cursor-not-allowed transition-all flex-shrink-0" 
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            disabled={!isOnAir}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          
          <ElasticSlider 
            value={volume}
            onChange={(v) => setVolume(v)}
            maxValue={1}
            startingValue={0}
            stepSize={0.01}
            leftIcon={<VolumeX size={20} className="text-gray-400" />}
            rightIcon={<Volume2 size={20} className="text-gray-400" />}
          />
        </div>

        {!isOnAir && (
          <div className="mt-4 text-center bg-yellow-900/50 text-yellow-200 p-3 rounded-md flex items-center justify-center gap-2">
            <Clock size={18} />
            <p className="text-sm font-semibold">El programa no está en vivo actualmente.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Player;