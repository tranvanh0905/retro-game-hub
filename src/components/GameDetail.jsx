import { useState } from 'react';
import { SYSTEMS, romUrl, imgUrl } from '../data/games';
import './GameDetail.css';

const isMobile = () => window.innerWidth <= 768;

export default function GameDetail({ game }) {
  const sys = SYSTEMS[game.system];
  const [imgErr, setImgErr] = useState(false);
  const [expanded, setExpanded] = useState(() => !isMobile());
  const src = imgUrl(game);

  return (
    <div className="gd">
      <button className="gd-header" onClick={() => setExpanded(v => !v)}>
        <span className="gd-header-title">{sys.icon} {game.title}</span>
        <span className={`gd-arrow ${expanded ? 'open' : ''}`}>&#9660;</span>
      </button>
      {expanded && (
        <div className="gd-content">
          <div className="gd-top">
            {src && !imgErr && (
              <img className="gd-thumb" src={src} alt={game.title} onError={() => setImgErr(true)} />
            )}
            <div className="gd-body">
              <h2 className="gd-title">{game.title}</h2>
              <div className="gd-meta">{sys.full}</div>
              <div className="gd-pills">
                <span className="pill" style={{ padding: '3px 8px' }}>{sys.icon} {sys.name}</span>
              </div>
            </div>
          </div>
          <div className="gd-legal">
            📁 ROM file: <strong>{game.romFile}</strong> —
            <a href={romUrl(game)} download className="gd-dl-link">⬇ Download ROM</a>
          </div>
        </div>
      )}
    </div>
  );
}
