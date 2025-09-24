// src/components/Player.jsx

import { useState, useRef } from 'react';
import { STREAM_URL, COVER_ART } from '../config';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error al reproducir audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
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
      
      {/* 👇 NUEVA LÍNEA AÑADIDA 👇 */}
      <p className="text-center font-semibold text-gray-200 text-lg mb-6 tracking-wider">
        Lunes a Viernes de 21:00 a 22:00 hs.
      </p>

      <div className="max-w-md mx-auto bg-brand-dark p-6 rounded-lg shadow-2xl border border-brand-purple/30">
        <div className="flex items-center gap-6">
          <img src={COVER_ART} alt="Cover Art" className="w-24 h-24 rounded-md shadow-lg" />
          <div className="flex-1">
            <p className="text-sm text-gray-400">Ahora en Universo 8090</p>
            <h3 className="text-lg font-bold text-white truncate">Cargando metadata...</h3>
            <p className="text-md text-gray-300">Stream en vivo</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6">
          <audio ref={audioRef} src={STREAM_URL} preload="none"></audio>
          <button onClick={togglePlayPause} className="btn btn-primary p-4 rounded-full" aria-label={isPlaying ? 'Pausar' : 'Reproducir'}>
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <button onClick={toggleMute} className="text-gray-400 hover:text-white" aria-label={isMuted ? 'Quitar silencio' : 'Silenciar'}>
            {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Player;