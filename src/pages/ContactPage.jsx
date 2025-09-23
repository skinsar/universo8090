import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import BlurText from '../components/BlurText'; // <-- Importamos el componente

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-container">
      {/* 👇 Reemplazamos el h1 por BlurText 👇 */}
      <BlurText text="Contacto y Pedidos" className="section-title" />
      <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Tu voz es parte de Universo 8090. Envíame tus pedidos musicales, dedicatorias, o cualquier mensaje que quieras compartir.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;