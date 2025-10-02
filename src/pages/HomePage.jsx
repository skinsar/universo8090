// src/pages/HomePage.jsx

import Hero from '../components/Hero';
import Player from '../components/Player';
import About from '../components/About';
import Playlist from '../components/Playlist';

import ContactForm from '../components/ContactForm';
import BlurText from '../components/BlurText';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Player />
      <About />
      <Playlist />
      
      <section id="contacto" className="section-container">
        <BlurText text="Participa en el Programa" className="section-title" />
        <ContactForm />
      </section>
    </>
  );
};

export default HomePage;