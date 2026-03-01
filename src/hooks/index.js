import { useState, useEffect, useCallback } from 'react';
export { usePageTracking } from './usePageTracking';

export function useDebounce(value, delay = 200) {
  const [d, setD] = useState(value);
  useEffect(() => { const t = setTimeout(() => setD(value), delay); return () => clearTimeout(t); }, [value, delay]);
  return d;
}

export function useFavorites() {
  const [favs, setFavs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('retro_favs') || '[]'); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem('retro_favs', JSON.stringify(favs)); }, [favs]);
  const toggle = useCallback((id) => {
    setFavs(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  }, []);
  const isFav = useCallback((id) => favs.includes(id), [favs]);
  return { favs, toggle, isFav };
}

const MAX_RECENT = 20;
export function useRecentlyPlayed() {
  const [recent, setRecent] = useState(() => {
    try { return JSON.parse(localStorage.getItem('retro_recent') || '[]'); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem('retro_recent', JSON.stringify(recent)); }, [recent]);
  const addRecent = useCallback((id) => {
    setRecent(prev => {
      const filtered = prev.filter(r => r.id !== id);
      return [{ id, ts: Date.now() }, ...filtered].slice(0, MAX_RECENT);
    });
  }, []);
  return { recent, addRecent };
}
