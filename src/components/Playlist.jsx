import BlurText from './BlurText';

const Playlist = () => {
  return (
    
    <section id="playlist" className="section-container backdrop-blur-sm">
      <BlurText text="Escucha Nuestros Episodios" className="section-title" />
      <div className="max-w-4xl mx-auto">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/7AB1ot6Uibx3HfFJZ9QFCh?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Playlist de Episodios en Spotify"
        ></iframe>
      </div>
    </section>
  );
};

export default Playlist;