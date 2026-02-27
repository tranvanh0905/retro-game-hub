import { useCallback, useRef } from 'react';
import './MobileGamepad.css';

const BUTTONS = {
  up:     { key: 'ArrowUp',    label: '\u25B2' },
  down:   { key: 'ArrowDown',  label: '\u25BC' },
  left:   { key: 'ArrowLeft',  label: '\u25C0' },
  right:  { key: 'ArrowRight', label: '\u25B6' },
  a:      { key: 'x',          label: 'A' },
  b:      { key: 'z',          label: 'B' },
  start:  { key: 'Enter',      label: 'START' },
  select: { key: 'Shift',      label: 'SELECT' },
  l:      { key: 'q',          label: 'L' },
  r:      { key: 'e',          label: 'R' },
};

function fireKey(type, key) {
  document.dispatchEvent(new KeyboardEvent(type, { key, bubbles: true }));
}

export default function MobileGamepad() {
  const activeKeys = useRef(new Set());

  const onDown = useCallback((key, e) => {
    e.preventDefault();
    if (activeKeys.current.has(key)) return;
    activeKeys.current.add(key);
    navigator.vibrate?.(30);
    fireKey('keydown', key);
  }, []);

  const onUp = useCallback((key, e) => {
    e.preventDefault();
    if (!activeKeys.current.has(key)) return;
    activeKeys.current.delete(key);
    fireKey('keyup', key);
  }, []);

  const bind = useCallback((id) => {
    const { key } = BUTTONS[id];
    return {
      onTouchStart: (e) => onDown(key, e),
      onTouchEnd:   (e) => onUp(key, e),
      onTouchCancel:(e) => onUp(key, e),
    };
  }, [onDown, onUp]);

  return (
    <div className="mgp">
      {/* Shoulder buttons */}
      <div className="mgp-shoulders">
        <button className="mgp-btn mgp-shoulder" {...bind('l')}>L</button>
        <button className="mgp-btn mgp-shoulder" {...bind('r')}>R</button>
      </div>

      {/* Main area: D-pad left, A/B right */}
      <div className="mgp-main">
        <div className="mgp-dpad">
          <button className="mgp-btn mgp-d mgp-d-up" {...bind('up')}>{BUTTONS.up.label}</button>
          <button className="mgp-btn mgp-d mgp-d-left" {...bind('left')}>{BUTTONS.left.label}</button>
          <div className="mgp-d-center" />
          <button className="mgp-btn mgp-d mgp-d-right" {...bind('right')}>{BUTTONS.right.label}</button>
          <button className="mgp-btn mgp-d mgp-d-down" {...bind('down')}>{BUTTONS.down.label}</button>
        </div>

        <div className="mgp-actions">
          <button className="mgp-btn mgp-ab mgp-b" {...bind('b')}>B</button>
          <button className="mgp-btn mgp-ab mgp-a" {...bind('a')}>A</button>
        </div>
      </div>

      {/* Center buttons */}
      <div className="mgp-center">
        <button className="mgp-btn mgp-meta" {...bind('select')}>SELECT</button>
        <button className="mgp-btn mgp-meta" {...bind('start')}>START</button>
      </div>
    </div>
  );
}
