import { useState } from 'react';
import { SYSTEMS, romUrl, imgUrl } from '../data/games';
import './GameDetail.css';

export default function GameDetail({ game }) {
  const sys = SYSTEMS[game.system];
  const [imgErr, setImgErr] = useState(false);
  const src = imgUrl(game);

  return (
    <div className="gd">
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
  );
}
