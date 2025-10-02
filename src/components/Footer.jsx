import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-brand-purple/20">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <Link to="/" className="inline-block mb-4">
          
          <img src="/assets/logo.svg" alt="Logo Universo 8090" className="h-8" />
        </Link>
        <p className="mb-4">Lunes a Viernes de 21:00 a 22:00 hs.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/archivo" className="hover:text-brand-cyan transition-colors">Archivo</Link>
          <Link to="/contacto" className="hover:text-brand-cyan transition-colors">Contacto</Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Universo 8090. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;