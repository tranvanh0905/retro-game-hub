import { Routes, Route } from 'react-router-dom';
import { useFavorites, useRecentlyPlayed, usePageTracking } from './hooks';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';

export default function App() {
  const { favs, toggle, isFav } = useFavorites();
  const { recent, addRecent } = useRecentlyPlayed();
  usePageTracking();
  return (
    <Routes>
      <Route path="/" element={<HomePage favs={favs} toggleFav={toggle} isFav={isFav} recent={recent} />} />
      <Route path="/play/:slug" element={<PlayPage favs={favs} toggleFav={toggle} isFav={isFav} addRecent={addRecent} />} />
    </Routes>
  );
}
