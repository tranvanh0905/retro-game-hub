import { useCallback, useRef } from 'react';
import './MobileGamepad.css';

const BUTTONS = {
  up:     { key: 'ArrowUp',    code: 'ArrowUp',    keyCode: 38, label: '\u25B2' },
  down:   { key: 'ArrowDown',  code: 'ArrowDown',  keyCode: 40, label: '\u25BC' },
  left:   { key: 'ArrowLeft',  code: 'ArrowLeft',  keyCode: 37, label: '\u25C0' },
  right:  { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39, label: '\u25B6' },
  a:      { key: 'x',          code: 'KeyX',       keyCode: 88, label: 'A' },
  b:      { key: 'z',          code: 'KeyZ',       keyCode: 90, label: 'B' },
  start:  { key: 'Enter',      code: 'Enter',      keyCode: 13, label: 'START' },
  select: { key: 'Shift',      code: 'ShiftLeft',  keyCode: 16, label: 'SELECT' },
  l:      { key: 'q',          code: 'KeyQ',       keyCode: 81, label: 'L' },
  r:      { key: 'e',          code: 'KeyE',       keyCode: 69, label: 'R' },
};

function fireKey(type, btn) {
  const evt = new KeyboardEvent(type, {
    key: btn.key,
    code: btn.code,
    keyCode: btn.keyCode,
    which: btn.keyCode,
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(evt);
}

export default function MobileGamepad() {
  const activeKeys = useRef(new Set());

  const onDown = useCallback((btn, e) => {
    e.preventDefault();
    if (activeKeys.current.has(btn.code)) return;
    activeKeys.current.add(btn.code);
    navigator.vibrate?.(30);
    fireKey('keydown', btn);
  }, []);

  const onUp = useCallback((btn, e) => {
    e.preventDefault();
    if (!activeKeys.current.has(btn.code)) return;
    activeKeys.current.delete(btn.code);
    fireKey('keyup', btn);
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
