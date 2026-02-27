import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GAMES, SYSTEMS } from '../data/games';
import Emulator from '../components/Emulator';
import Controls from '../components/Controls';
import GameDetail from '../components/GameDetail';
import RelatedGames from '../components/RelatedGames';
import './PlayPage.css';

export default function PlayPage({ favs, toggleFav, isFav }) {
  const { slug } = useParams();
  const nav = useNavigate();
  const game = GAMES.find(g => g.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (game) {
      const sys = SYSTEMS[game.system];
      document.title = `${game.title} — Play ${sys.name} | Retro Game Hub`;
      document.querySelector('meta[name="description"]')?.setAttribute('content',
        `Play ${game.title} (${sys.full}) online for free in your browser. No downloads required.`
      );
    }
    return () => { document.title = 'Retro Game Hub — Play Classic NES & PS1 Games Online Free'; };
  }, [slug, game]);

  if (!game) {
    return (
      <div className="pp-404">
        <div style={{ fontSize: 48 }}>🎮</div>
        <div className="pp-404-t">GAME NOT FOUND</div>
        <button className="btn" onClick={() => nav('/')} style={{ marginTop: 12 }}>← Back to Home</button>
      </div>
    );
  }

  const sys = SYSTEMS[game.system];

  return (
    <div className="pp">
      <div className="pp-head">
        <button className="btn" onClick={() => nav('/')} style={{ padding: '6px 14px' }}>← Back</button>
        <div className="pp-hinfo">
          <div className="pp-htitle">{game.title}</div>
          <div className="pp-hmeta">
            <span className="sys-badge" style={{ background: sys.color+'22', color: sys.color, borderColor: sys.color+'55', fontSize: 8, position: 'static' }}>
              {sys.icon} {sys.name}
            </span>
          </div>
        </div>
        <button className="pp-fav" onClick={() => toggleFav(game.id)}>
          {isFav(game.id) ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="pp-body">
        <Emulator game={game} />
        <Controls />
        <GameDetail game={game} />
        <RelatedGames game={game} />
      </div>
    </div>
  );
}
