import { Routes, Route } from 'react-router-dom';
import { useFavorites } from './hooks';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';

export default function App() {
  const { favs, toggle, isFav } = useFavorites();
  return (
    <Routes>
      <Route path="/" element={<HomePage favs={favs} toggleFav={toggle} isFav={isFav} />} />
      <Route path="/play/:slug" element={<PlayPage favs={favs} toggleFav={toggle} isFav={isFav} />} />
    </Routes>
  );
}
