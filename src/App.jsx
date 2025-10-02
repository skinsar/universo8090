// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WeeklyContentPage from './pages/WeeklyContentPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage'; // <-- IMPORTA LA NUEVA PÁGINA
import LightRays from './components/LightRays';

function App() {
  return (
    <Router>
      <div className="relative">
        <div className="fixed inset-0 z-0 opacity-60">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00E5FF"
            raysSpeed={1.2}
            lightSpread={0.7}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.08}
          />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cancion-semanal" element={<WeeklyContentPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} /> {/* <-- AÑADE LA NUEVA RUTA */}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;