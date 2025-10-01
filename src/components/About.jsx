// src/components/About.jsx

import { LOCUTOR_PHOTO, BIO_LOCUTOR } from '../config.js';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="quien-soy" className="section-container backdrop-blur-sm">
      <BlurText text="Quién Soy" className="section-title" />
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img
            src={LOCUTOR_PHOTO}
            alt="Foto del locutor de Universo 8090"
            className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-brand-purple shadow-lg shadow-brand-purple/20"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <ScrollReveal className="text-lg leading-relaxed text-gray-300">
            {BIO_LOCUTOR}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;