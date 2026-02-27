import { useCallback, useRef } from 'react';
import './MobileGamepad.css';

// Libretro RetroPad button indices
const BUTTONS = {
  up:     { index: 4,  label: '\u25B2' },
  down:   { index: 5,  label: '\u25BC' },
  left:   { index: 6,  label: '\u25C0' },
  right:  { index: 7,  label: '\u25B6' },
  a:      { index: 8,  label: 'A' },
  b:      { index: 0,  label: 'B' },
  start:  { index: 3,  label: 'START' },
  select: { index: 2,  label: 'SELECT' },
  l:      { index: 10, label: 'L' },
  r:      { index: 11, label: 'R' },
};

function sendInput(index, pressed) {
  try {
    const emu = window.EJS_emulator;
    if (emu?.gameManager) {
      emu.gameManager.simulateInput(0, index, pressed ? 1 : 0);
    }
  } catch {}
}

export default function MobileGamepad() {
  const activeBtns = useRef(new Set());

  const onDown = useCallback((btn, e) => {
    e.preventDefault();
    if (activeBtns.current.has(btn.index)) return;
    activeBtns.current.add(btn.index);
    navigator.vibrate?.(30);
    sendInput(btn.index, true);
  }, []);

  const onUp = useCallback((btn, e) => {
    e.preventDefault();
    if (!activeBtns.current.has(btn.index)) return;
    activeBtns.current.delete(btn.index);
    sendInput(btn.index, false);
  }, []);

  const bind = useCallback((id) => {
    const btn = BUTTONS[id];
    return {
      onTouchStart: (e) => onDown(btn, e),
      onTouchEnd:   (e) => onUp(btn, e),
      onTouchCancel:(e) => onUp(btn, e),
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
