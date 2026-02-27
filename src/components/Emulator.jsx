import { useEffect, useRef, useState } from 'react';
import { SYSTEMS, romUrl } from '../data/games';
import './Emulator.css';

export default function Emulator({ game }) {
  const ref = useRef(null);
  const scriptRef = useRef(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    if (!game) return;
    const sys = SYSTEMS[game.system];
    setStatus('loading');

    // Cleanup previous
    if (scriptRef.current && document.body.contains(scriptRef.current)) {
      document.body.removeChild(scriptRef.current);
    }
    if (ref.current) ref.current.innerHTML = '';

    // Cleanup old EJS globals
    ['EJS_player','EJS_core','EJS_gameUrl','EJS_gameName','EJS_pathtodata','EJS_color','EJS_startOnLoaded','EJS_emulator','EJS_defaultOptions'].forEach(k => delete window[k]);

    // Set new EJS globals
    window.EJS_player = '#emu-target';
    window.EJS_core = sys.core;
    window.EJS_gameUrl = romUrl(game);
    window.EJS_gameName = game.title;
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
    window.EJS_color = '#00ff88';
    window.EJS_startOnLoaded = true;
    window.EJS_defaultOptions = {};

    // Load EmulatorJS
    const s = document.createElement('script');
    s.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    s.async = true;
    s.onload = () => setTimeout(() => setStatus('ready'), 1200);
    s.onerror = () => setStatus('error');
    document.body.appendChild(s);
    scriptRef.current = s;

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      ['EJS_player','EJS_core','EJS_gameUrl','EJS_gameName','EJS_pathtodata','EJS_color','EJS_startOnLoaded','EJS_emulator','EJS_defaultOptions'].forEach(k => delete window[k]);
    };
  }, [game?.id]);

  return (
    <div className="emu-wrap">
      <div id="emu-target" ref={ref} className="emu-target" />
      {status === 'loading' && (
        <div className="emu-overlay">
          <div className="spinner" />
          <div className="emu-load-title">{game.title.toUpperCase()}</div>
          <div className="emu-load-sub">Initializing emulator & loading ROM</div>
        </div>
      )}
      {status === 'error' && (
        <div className="emu-overlay">
          <div style={{ fontSize: 40, marginBottom: 10 }}>⚠️</div>
          <div className="emu-err-title">CDN BLOCKED</div>
          <div className="emu-err-sub">EmulatorJS CDN might be blocked. Try disabling ad-blockers.</div>
          <a href={romUrl(game)} download className="emu-dl-btn">⬇ Download ROM</a>
        </div>
      )}
    </div>
  );
}
