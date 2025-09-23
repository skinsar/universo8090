// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WeeklyContentPage from './pages/WeeklyContentPage';
import ContactPage from './pages/ContactPage';
import LightRays from './components/LightRays'; // <-- 1. Importamos el nuevo componente

function App() {
  return (
    <Router>
      {/* 2. Envolvemos todo en un div relativo para posicionar el fondo */}
      <div className="relative">

        {/* 3. Colocamos el fondo animado. Es fijo y está por detrás de todo (z-0) */}
        <div className="fixed inset-0 z-0 opacity-60">
          <LightRays
            raysColor="#00E5FF" // Color cian de nuestra paleta
            raysSpeed={1.2}
            lightSpread={0.7}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.08}
          />
        </div>

        {/* 4. Todo el contenido original de la app va en un div por encima del fondo (z-10) */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cancion-semanal" element={<WeeklyContentPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;