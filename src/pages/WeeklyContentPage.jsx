// src/pages/WeeklyContentPage.jsx

import { useEffect } from 'react';

import SongOfWeek from '../components/SongOfWeek';

const WeeklyContentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div className="py-16 md:py-24">
      
      <SongOfWeek />
    </div>
  );
};

export default WeeklyContentPage;