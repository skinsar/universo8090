// src/pages/WeeklyContentPage.jsx

import { useEffect } from 'react';
// Ya no importamos ThemeOfWeek
import SongOfWeek from '../components/SongOfWeek';

const WeeklyContentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Usamos un padding general para la página
    <div className="py-16 md:py-24">
      {/* Solo mostramos el componente de la canción */}
      <SongOfWeek />
    </div>
  );
};

export default WeeklyContentPage;