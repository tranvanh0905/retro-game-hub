import { useState, useEffect } from 'react';
import './LandscapePrompt.css';

const DISMISSED_KEY = 'landscape-prompt-dismissed';

export default function LandscapePrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch || sessionStorage.getItem(DISMISSED_KEY)) return;

    const mq = window.matchMedia('(orientation: portrait)');
    const update = () => setVisible(mq.matches);
    update();

    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  };

  return (
    <div className="lp-overlay" onClick={dismiss}>
      <div className="lp-content">
        <div className="lp-phone">
          <div className="lp-phone-icon">📱</div>
          <div className="lp-arrow">↻</div>
        </div>
        <div className="lp-text">Rotate your phone for the best experience</div>
        <button className="lp-dismiss" onClick={dismiss}>Continue anyway</button>
      </div>
    </div>
  );
}
