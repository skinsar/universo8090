import { useState } from 'react';
import episodes from '../data/episodes.json';
import { PlayCircle, Calendar } from 'lucide-react';

const ArchiveList = ({ showAll = false }) => {
  const [filter, setFilter] = useState('');
  const displayedEpisodes = showAll ? episodes : episodes.slice(0, 3);

  const filteredEpisodes = displayedEpisodes.filter(episode =>
    episode.title.toLowerCase().includes(filter.toLowerCase()) ||
    episode.summary.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {showAll && (
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar por título o tema..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800/50 border-2 border-brand-purple rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan"
          />
        </div>
      )}

      <div className="space-y-6 max-w-3xl mx-auto">
        {filteredEpisodes.length > 0 ? (
          filteredEpisodes.map(ep => (
            <div key={ep.id} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-brand-magenta transition-colors duration-300">
              <h3 className="text-xl font-bold text-brand-cyan mb-2">{ep.title}</h3>
              <div className="flex items-center text-sm text-gray-400 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(ep.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <p className="text-gray-300 mb-4">{ep.summary}</p>
              <a
                href={ep.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-brand-magenta hover:text-white transition-colors"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Escuchar episodio
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No se encontraron episodios con ese criterio.</p>
        )}
      </div>
    </div>
  );
};

export default ArchiveList;