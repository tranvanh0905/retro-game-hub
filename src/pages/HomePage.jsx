import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { GAMES, SYSTEMS, FEATURED_SLUGS } from '../data/games';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import './HomePage.css';

const PAGE_SIZE = 60;

export default function HomePage({ favs, toggleFav, isFav }) {
  useEffect(() => {
    document.title = 'Retro Game Hub — Play Classic NES & PS1 Games Online Free';
  }, []);

  const [sort, setSort] = useState('az');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showFeatured, setShowFeatured] = useState(true);
  const [showPs1, setShowPs1] = useState(true);
  const [activeSystem, setActiveSystem] = useState('all');
  const loaderRef = useRef(null);

  const systemTags = useMemo(() => {
    const counts = {};
    for (const g of GAMES) counts[g.system] = (counts[g.system] || 0) + 1;
    return [
      { id: 'all', label: '🕹️ ALL', count: GAMES.filter(g => g.system !== 'ps1').length },
      ...Object.entries(SYSTEMS)
        .filter(([id]) => id !== 'ps1') // PS1 hidden until BIOS ready
        .map(([id, sys]) => ({
          id, label: `${sys.icon} ${sys.name}`, count: counts[id] || 0, color: sys.color,
        })),
    ];
  }, []);

  const featuredGames = useMemo(() =>
    GAMES.filter(g => FEATURED_SLUGS.has(g.slug)).sort((a, b) => a.title.localeCompare(b.title)),
  []);

  const ps1Games = useMemo(() =>
    GAMES.filter(g => g.system === 'ps1').sort((a, b) => a.title.localeCompare(b.title)),
  []);

  const nesGames = useMemo(() => {
    const list = GAMES.filter(g => g.system === 'nes');
    const sorts = {
      az: (a, b) => a.title.localeCompare(b.title),
      za: (a, b) => b.title.localeCompare(a.title),
    };
    return list.sort(sorts[sort]);
  }, [sort]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [sort]);

  const visibleGames = useMemo(() => nesGames.slice(0, visibleCount), [nesGames, visibleCount]);
  const hasMore = visibleCount < nesGames.length;

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + PAGE_SIZE, nesGames.length));
  }, [nesGames.length]);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) loadMore(); },
      { rootMargin: '400px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  const nesSys = SYSTEMS.nes;
  const ps1Sys = SYSTEMS.ps1;

  return (
    <>
      <Header />

      <main className="home-main">
        {/* System Filter Tags */}
        <div className="system-tags">
          {systemTags.map(t => (
            <button
              key={t.id}
              className={`sys-tag ${activeSystem === t.id ? 'active' : ''}`}
              style={activeSystem === t.id && t.color ? { '--tag-color': t.color } : t.color ? { '--tag-color': t.color } : {}}
              onClick={() => setActiveSystem(t.id)}
            >
              <span className="sys-tag-label">{t.label}</span>
              <span className="sys-tag-count">{t.count}</span>
            </button>
          ))}
        </div>

        {/* NES Classic Hits */}
        {(activeSystem === 'all' || activeSystem === 'nes') && (
          <section className="featured-section">
            <button className="featured-header" onClick={() => setShowFeatured(v => !v)}>
              <span className="featured-title">{nesSys.icon} CLASSIC HITS</span>
              <span className="featured-count">{featuredGames.length} games</span>
              <span className={`featured-arrow ${showFeatured ? 'open' : ''}`}>&#9660;</span>
            </button>
            {showFeatured && (
              <div className="game-grid featured-grid">
                {featuredGames.map((g, i) => (
                  <GameCard key={g.id} game={g} idx={i} isFav={isFav(g.id)} onFav={toggleFav} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* PS1 Section — hidden until BIOS ready */}
        {false && (activeSystem === 'all' || activeSystem === 'ps1') && ps1Games.length > 0 && (
          <section className="featured-section ps1-section">
            <button className="featured-header" onClick={() => setShowPs1(v => !v)}>
              <span className="featured-title ps1-title">{ps1Sys.icon} PLAYSTATION 1</span>
              <span className="featured-count">{ps1Games.length} game{ps1Games.length !== 1 ? 's' : ''}</span>
              <span className={`featured-arrow ${showPs1 ? 'open' : ''}`}>&#9660;</span>
            </button>
            {showPs1 && (
              <div className="game-grid featured-grid">
                {ps1Games.map((g, i) => (
                  <GameCard key={g.id} game={g} idx={i} isFav={isFav(g.id)} onFav={toggleFav} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* NES All Games */}
        {(activeSystem === 'all' || activeSystem === 'nes') && (
          <>
            <FilterBar sort={sort} setSort={setSort} />

            <div className="results-count">
              {nesSys.icon} {nesGames.length} NES game{nesGames.length !== 1 ? 's' : ''}
            </div>

            {visibleGames.length > 0 ? (
              <div className="game-grid">
                {visibleGames.map((g, i) => (
                  <GameCard key={g.id} game={g} idx={i} isFav={isFav(g.id)} onFav={toggleFav} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <div style={{ fontSize: 48 }}>🎮</div>
                <div className="empty-t">NO GAMES FOUND</div>
                <div className="empty-s">Try a different search</div>
              </div>
            )}

            {hasMore && (
              <div ref={loaderRef} className="load-more">
                <div className="spinner" style={{ width: 24, height: 24, borderWidth: 2 }} />
                <span>Loading more games... ({visibleCount} / {nesGames.length})</span>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
