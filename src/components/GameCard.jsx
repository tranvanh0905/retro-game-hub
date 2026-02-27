import { useState, memo } from 'react';
import { SYSTEMS, imgUrl } from '../data/games';
import './GameCard.css';

const GameCard = memo(function GameCard({ game, idx, isFav, onFav }) {
  const sys = SYSTEMS[game.system];
  const [imgErr, setImgErr] = useState(false);
  const src = imgUrl(game);

  return (
    <div className="gc fade-up" style={{ animationDelay: `${Math.min(idx * 30, 400)}ms` }} onClick={() => { window.location.href = `/play/${game.slug}`; }}>
      <div className="gc-cover">
        {src && !imgErr ? (
          <img className="gc-img" src={src} alt={game.title} loading="lazy" onError={() => setImgErr(true)} />
        ) : (
          <div className="gc-fallback">
            <div style={{ fontSize: 32 }}>{sys.icon}</div>
            <div className="gc-fb-name" style={{ color: sys.color }}>{game.title}</div>
          </div>
        )}
        <button className="gc-play">▶ PLAY NOW</button>
        <span className="sys-badge gc-sys" style={{ background: sys.color+'22', color: sys.color, borderColor: sys.color+'55' }}>{sys.name}</span>
        <button className="gc-fav" onClick={e => { e.stopPropagation(); onFav(game.id); }}>{isFav ? '❤️' : '🤍'}</button>
      </div>
      <div className="gc-info">
        <div className="gc-title">{game.title}</div>
      </div>
    </div>
  );
});

export default GameCard;
