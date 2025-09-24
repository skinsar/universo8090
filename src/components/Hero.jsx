// src/components/Hero.jsx

import GradientText from './GradientText';
import ScrollReveal from './ScrollReveal'; // <-- LA LÍNEA QUE FALTABA

const Hero = () => {
  return (
    <section id="hero" className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="relative z-20 px-6">
        <GradientText
          colors={["#FF2D95", "#9B6CFC", "#00E5FF", "#9B6CFC", "#FF2D95"]}
          animationSpeed={5}
          className="font-title text-5xl md:text-7xl lg:text-8xl tracking-widest uppercase"
        >
          Universo 8090
        </GradientText>
        
        <ScrollReveal className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          El viaje sonoro que te transporta a las décadas que cambiaron la música para siempre.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;