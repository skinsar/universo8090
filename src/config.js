export const STREAM_URL = import.meta.env.VITE_STREAM_URL || null;
export const PLAYLIST_EMBED_URL = import.meta.env.VITE_PLAYLIST_EMBED_URL || null;
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || '';

export const LOCUTOR_PHOTO = '/assets/placeholder-locutor.jpg';
export const COVER_ART = '/assets/placeholder-cover.jpg';

export const BIO_LOCUTOR = "Soy el anfitrión de Universo 8090. Cada noche, de 21 a 22, te llevo en un viaje por la música y las historias de los 80 y 90. Prepárate para una dosis de anécdotas, datos curiosos y, por supuesto, la mejor música de dos décadas inolvidables.";

export const WHATSAPP_LINK = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : '#';
export const EMAIL_LINK = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : '#';

export const GALLERY_IMAGES = [
  { id: 1, src: '/assets/placeholder-gallery-1.jpg', alt: 'Imagen de un cassette de los 80' },
  { id: 4, src: '/assets/placeholder-gallery-4.jpg', alt: 'Imagen de una consola de videojuegos retro' },
];


export const SONG_OF_WEEK_YOUTUBE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // ¡Reemplaza con tu video de YouTube!
export const SONG_OF_WEEK_TITLE = 'Never Gonna Give You Up';
export const SONG_OF_WEEK_ARTIST = 'Rick Astley';
export const SONG_OF_WEEK_DESCRIPTION = 'Un ícono de los 80 que se convirtió en un fenómeno de internet. Un clásico infaltable con una línea de bajo inolvidable.'; 