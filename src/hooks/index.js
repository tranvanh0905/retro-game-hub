import { useState, useEffect, useCallback } from 'react';

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
