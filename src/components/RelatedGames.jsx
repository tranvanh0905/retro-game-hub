import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SYSTEMS, GAMES, imgUrl } from '../data/games';
import './RelatedGames.css';

const RelatedCard = memo(function RelatedCard({ game }) {
  const nav = useNavigate();
  const sys = SYSTEMS[game.system];
  const [err, setErr] = useState(false);
  const src = imgUrl(game);

  return (
    <div className="rc" onClick={() => nav(`/play/${game.slug}`)}>
      <div className="rc-cover">
        {src && !err ? (
          <img src={src} alt={game.title} loading="lazy" onError={() => setErr(true)} />
        ) : (
          <div className="rc-fb">{sys.icon}</div>
        )}
        <span className="sys-badge rc-sys" style={{ background: sys.color+'22', color: sys.color, borderColor: sys.color+'55', fontSize: 7, padding: '2px 5px', top: 4, left: 4 }}>{sys.name}</span>
      </div>
      <div className="rc-info">
        <div className="rc-name">{game.title}</div>
      </div>
    </div>
  );
});

export default function RelatedGames({ game }) {
  // Show random games with images (excluding current)
  const others = GAMES.filter(g => g.id !== game.id && g.img);
  const shuffled = others.sort(() => 0.5 - Math.random()).slice(0, 6);
  if (!shuffled.length) return null;

  return (
    <div className="rg">
      <div className="rg-title">YOU MIGHT ALSO LIKE</div>
      <div className="rg-grid">
        {shuffled.map(g => <RelatedCard key={g.id} game={g} />)}
      </div>
    </div>
  );
}
