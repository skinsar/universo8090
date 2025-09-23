import { GALLERY_IMAGES } from '../config.js';

const Gallery = () => {
  return (
    <section id="galeria" className="section-container">
      {/* Ya no hay título aquí */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {GALLERY_IMAGES.map(image => (
          <div key={image.id} className="group overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;