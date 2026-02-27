import { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAMES, imgUrl } from '../data/games';
import { useDebounce } from '../hooks';
import './Header.css';

const MAX_RESULTS = 20;

export default function Header() {
  const nav = useNavigate();
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const q = useDebounce(search);

  const results = useMemo(() => {
    if (!q) return [];
    const lq = q.toLowerCase();
    return GAMES.filter(g => g.title.toLowerCase().includes(lq)).slice(0, MAX_RESULTS);
  }, [q]);

  // close dropdown on click outside
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (slug) => {
    setSearch('');
    setOpen(false);
    window.location.href = `/play/${slug}`;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { setOpen(false); inputRef.current?.blur(); }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => nav('/')}>
          <div className="logo-icon">🕹️</div>
          <div>
            <div className="logo-title">RETRO HUB</div>
            <div className="logo-sub">NES GAME COLLECTION</div>
          </div>
        </div>
        <div className="search-wrap" ref={wrapRef}>
          <span className="search-ico">⌕</span>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Search 2000+ games..."
            value={search}
            onChange={e => { setSearch(e.target.value); setOpen(true); }}
            onFocus={() => { if (search) setOpen(true); }}
            onKeyDown={handleKeyDown}
          />
          {search && <button className="search-x" onClick={() => { setSearch(''); setOpen(false); }}>✕</button>}

          {open && q && (
            <div className="search-dropdown">
              {results.length > 0 ? (
                <>
                  <div className="sd-count">{results.length}{results.length === MAX_RESULTS ? '+' : ''} results</div>
                  {results.map(g => {
                    const src = imgUrl(g);
                    return (
                      <button key={g.id} className="sd-item" onClick={() => handleSelect(g.slug)}>
                        <div className="sd-thumb">
                          {src ? <img src={src} alt="" /> : <span className="sd-icon">🎮</span>}
                        </div>
                        <span className="sd-title">{g.title}</span>
                        <span className="sd-play">▶</span>
                      </button>
                    );
                  })}
                </>
              ) : (
                <div className="sd-empty">No games found</div>
              )}
            </div>
          )}
        </div>
        <div className="header-stats"><span className="dot">●</span> {GAMES.length} games</div>
      </div>
      <div className="header-glow" />
    </header>
  );
}
