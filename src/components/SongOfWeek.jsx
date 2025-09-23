import ReactPlayer from 'react-player';
import { 
  SONG_OF_WEEK_YOUTUBE_URL, 
  SONG_OF_WEEK_TITLE, 
  SONG_OF_WEEK_ARTIST,
  SONG_OF_WEEK_DESCRIPTION
} from '../config.js';
import BlurText from './BlurText'; // <-- Importamos el componente

const SongOfWeek = () => {
  return (
    <section id="cancion-semanal" className="section-container">
      {/* 👇 Reemplazamos el h2 por BlurText 👇 */}
      <BlurText text="Canción de la Semana" className="section-title" />
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl font-bold text-brand-cyan mb-2">{SONG_OF_WEEK_TITLE} - {SONG_OF_WEEK_ARTIST}</p>
        <p className="text-gray-400 mb-8">{SONG_OF_WEEK_DESCRIPTION}</p>
        
        {SONG_OF_WEEK_YOUTUBE_URL ? (
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-2 border-brand-magenta/50">
            <ReactPlayer
              url={SONG_OF_WEEK_YOUTUBE_URL}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              controls={true}
            />
          </div>
        ) : (
          <div className="text-center p-8 bg-yellow-900/50 border border-yellow-500 rounded-lg">
            <h3 className="font-title text-2xl text-yellow-300">Canción no configurada</h3>
            <p className="mt-2 text-yellow-200">El administrador debe configurar `SONG_OF_WEEK_YOUTUBE_URL` en `src/config.js`.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SongOfWeek;