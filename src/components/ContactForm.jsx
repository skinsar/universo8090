import { WHATSAPP_LINK, EMAIL_LINK } from '../config.js';
import { Mail, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! (Simulación) Gracias por contactarte.');
    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="md:col-span-1">
        <h3 className="font-title text-2xl text-brand-cyan mb-4">Envía tu Mensaje</h3>
        <p className="mb-6">¿Tienes un pedido, una dedicatoria o simplemente quieres saludar? Usa el formulario o contáctame directamente.</p>
        <div className="space-y-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-brand-magenta transition-colors">
            <MessageCircle size={24} />
            <span>Enviar WhatsApp</span>
          </a>
          <a href={EMAIL_LINK} className="flex items-center gap-3 text-lg hover:text-brand-magenta transition-colors">
            <Mail size={24} />
            <span>Enviar Correo</span>
          </a>
        </div>
      </div>
      <div className="md:col-span-1">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Nombre</label>
            <input type="text" id="name" name="name" required className="w-full p-2 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-2 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">Mensaje / Dedicatoria</label>
            <textarea id="message" name="message" rows="4" required className="w-full p-2 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;