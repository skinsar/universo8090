// src/components/SongOfWeek.jsx

import { useState, useEffect } from 'react'; // 1. Importamos hooks de React
import { doc, getDoc } from 'firebase/firestore'; // 2. Importamos funciones de Firestore
import { db } from '../firebase.js'; // 3. Importamos nuestra conexión a la DB
import ReactPlayer from 'react-player';
<<<<<<< HEAD
import BlurText from './BlurText';
=======
import { 
  SONG_OF_WEEK_YOUTUBE_URL, 
  SONG_OF_WEEK_TITLE, 
  SONG_OF_WEEK_ARTIST,
  SONG_OF_WEEK_DESCRIPTION
} from '../config.js';
import BlurText from './BlurText'; 
>>>>>>> bb0e303f42619ade2c4c65ce5162f0c00d844363

const SongOfWeek = () => {
  // 4. Creamos estados para guardar la canción y saber si está cargando
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);

  // 5. Usamos useEffect para buscar los datos cuando el componente se carga
  useEffect(() => {
    const fetchSong = async () => {
      try {
        // Creamos una referencia a nuestro documento en la base de datos
        const docRef = doc(db, "siteContent", "songOfWeek");
        // Obtenemos el documento
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Si el documento existe, guardamos sus datos en nuestro estado
          setSong(docSnap.data());
        } else {
          console.log("No se encontró el documento de la canción de la semana!");
        }
      } catch (error) {
        console.error("Error al buscar la canción:", error);
      } finally {
        // Cuando termina (con o sin error), dejamos de mostrar el "cargando"
        setLoading(false);
      }
    };

    fetchSong();
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  // 6. Mostramos un mensaje de "cargando" mientras se buscan los datos
  if (loading) {
    return (
      <section id="cancion-semanal" className="section-container">
        <BlurText text="Canción de la Semana" className="section-title" />
        <div className="text-center text-gray-400">Cargando canción...</div>
      </section>
    );
  }

  // Si no hay canción después de cargar, no mostramos nada para evitar errores
  if (!song) {
    return null;
  }

  // 7. Una vez que tenemos los datos, los mostramos
  return (
    <section id="cancion-semanal" className="section-container">
<<<<<<< HEAD
=======
      
>>>>>>> bb0e303f42619ade2c4c65ce5162f0c00d844363
      <BlurText text="Canción de la Semana" className="section-title" />
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl font-bold text-brand-cyan mb-2">{song.title} - {song.artist}</p>
        <p className="text-gray-400 mb-8">{song.description}</p>
        
        {song.youtubeUrl ? (
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-2 border-brand-magenta/50">
            <ReactPlayer
              url={song.youtubeUrl}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              controls={true}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SongOfWeek;