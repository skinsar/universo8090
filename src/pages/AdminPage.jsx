// src/pages/AdminPage.jsx

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AdminPage = () => {
  // Estados para el login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Estados para el formulario de la canción
  const [songData, setSongData] = useState({ title: '', artist: '', description: '', youtubeUrl: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  // Efecto para verificar si el usuario ya está logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Si hay un usuario, buscamos los datos de la canción
        const fetchSongData = async () => {
          setIsLoading(true);
          const docRef = doc(db, "siteContent", "songOfWeek");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setSongData(docSnap.data());
          }
          setIsLoading(false);
        };
        fetchSongData();
      } else {
        setIsLoading(false);
      }
    });
    return () => unsubscribe(); // Limpieza al desmontar
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Error: Las credenciales son incorrectas.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    const docRef = doc(db, "siteContent", "songOfWeek");
    try {
      await updateDoc(docRef, songData);
      setSuccessMessage('¡Canción actualizada con éxito!');
      setTimeout(() => setSuccessMessage(''), 3000); // El mensaje desaparece después de 3 segundos
    } catch (err) {
      setError('Error al actualizar los datos.');
      console.error(err);
    }
  };

  // Si está cargando la sesión del usuario, no mostramos nada
  if (isLoading && !user) {
    return <div className="section-container text-center">Cargando...</div>;
  }

  // Si el usuario está logueado, mostramos el panel de edición
  if (user) {
    return (
      <div className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="section-title text-left mb-0">Panel de Admin</h1>
          <button onClick={handleLogout} className="btn btn-primary bg-red-600 hover:bg-red-700">Cerrar Sesión</button>
        </div>
        
        <div className="max-w-2xl mx-auto bg-brand-dark p-8 rounded-lg shadow-2xl border border-brand-purple/30">
          <h2 className="text-2xl font-bold mb-6 text-brand-cyan">Editar Canción de la Semana</h2>
          {isLoading ? <p>Cargando datos de la canción...</p> : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium">Título</label>
                <input type="text" name="title" value={songData.title} onChange={handleInputChange} className="w-full p-2.5 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
              </div>
              <div>
                <label htmlFor="artist" className="block mb-2 text-sm font-medium">Artista</label>
                <input type="text" name="artist" value={songData.artist} onChange={handleInputChange} className="w-full p-2.5 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium">Descripción</label>
                <textarea name="description" value={songData.description} onChange={handleInputChange} rows="3" className="w-full p-2.5 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan"></textarea>
              </div>
              <div>
                <label htmlFor="youtubeUrl" className="block mb-2 text-sm font-medium">URL de YouTube</label>
                <input type="url" name="youtubeUrl" value={songData.youtubeUrl} onChange={handleInputChange} className="w-full p-2.5 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
              </div>
              {successMessage && <p className="text-green-400 text-center">{successMessage}</p>}
              <button type="submit" className="btn btn-secondary w-full">Guardar Cambios</button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Si no hay usuario logueado, mostramos el formulario de login
  return (
    <div className="section-container">
      <h1 className="section-title">Acceso de Administrador</h1>
      <div className="max-w-md mx-auto bg-brand-dark p-8 rounded-lg shadow-2xl border border-brand-purple/30">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2.5 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2.5 bg-gray-800/50 border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;