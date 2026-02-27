import { useCallback, useRef, useState } from 'react';
import './MobileGamepad.css';

const BTN = { B: 0, SELECT: 2, START: 3, UP: 4, DOWN: 5, LEFT: 6, RIGHT: 7, A: 8, L: 10, R: 11 };

const DIR_BTNS = {
  'right':      [BTN.RIGHT],
  'down-right': [BTN.DOWN, BTN.RIGHT],
  'down':       [BTN.DOWN],
  'down-left':  [BTN.DOWN, BTN.LEFT],
  'left':       [BTN.LEFT],
  'up-left':    [BTN.UP, BTN.LEFT],
  'up':         [BTN.UP],
  'up-right':   [BTN.UP, BTN.RIGHT],
};

const DEAD_ZONE = 12;

function sendInput(index, pressed) {
  try {
    const emu = window.EJS_emulator;
    if (!emu?.gameManager) return;
    // Auto-resume if emulator was paused (e.g. lost focus)
    if (pressed && emu.paused) try { emu.play(); } catch {}
    emu.gameManager.simulateInput(0, index, pressed ? 1 : 0);
  } catch {}
}

function getDirection(touch, rect) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = touch.clientX - cx;
  const dy = touch.clientY - cy;
  if (Math.sqrt(dx * dx + dy * dy) < DEAD_ZONE) return null;

  let angle = Math.atan2(dy, dx) * 180 / Math.PI;
  if (angle < 0) angle += 360;

  if (angle >= 337.5 || angle < 22.5) return 'right';
  if (angle < 67.5)  return 'down-right';
  if (angle < 112.5) return 'down';
  if (angle < 157.5) return 'down-left';
  if (angle < 202.5) return 'left';
  if (angle < 247.5) return 'up-left';
  if (angle < 292.5) return 'up';
  return 'up-right';
}

export default function MobileGamepad() {
  const dpadRef = useRef(null);
  const dpadBtnsRef = useRef(new Set());
  const actionBtnsRef = useRef(new Set());
  const [activeDir, setActiveDir] = useState(null);

  /* ── D-pad (circular, 8-direction) ── */
  const updateDpad = useCallback((touch) => {
    const el = dpadRef.current;
    if (!el) return;
    const dir = getDirection(touch, el.getBoundingClientRect());
    const newBtns = dir ? new Set(DIR_BTNS[dir]) : new Set();
    const oldBtns = dpadBtnsRef.current;

    for (const idx of oldBtns) if (!newBtns.has(idx)) sendInput(idx, false);
    for (const idx of newBtns) {
      if (!oldBtns.has(idx)) {
        navigator.vibrate?.(15);
        sendInput(idx, true);
      }
    }
    dpadBtnsRef.current = newBtns;
    setActiveDir(dir);
  }, []);

  const releaseDpad = useCallback(() => {
    for (const idx of dpadBtnsRef.current) sendInput(idx, false);
    dpadBtnsRef.current = new Set();
    setActiveDir(null);
  }, []);

  const onDpadTouch = useCallback((e) => { e.preventDefault(); updateDpad(e.touches[0]); }, [updateDpad]);
  const onDpadMove  = useCallback((e) => { e.preventDefault(); updateDpad(e.touches[0]); }, [updateDpad]);
  const onDpadEnd   = useCallback((e) => { e.preventDefault(); releaseDpad(); }, [releaseDpad]);

  /* ── Action / meta buttons ── */
  const onBtnDown = useCallback((index, e) => {
    e.preventDefault();
    if (actionBtnsRef.current.has(index)) return;
    actionBtnsRef.current.add(index);
    navigator.vibrate?.(30);
    sendInput(index, true);
  }, []);

  const onBtnUp = useCallback((index, e) => {
    e.preventDefault();
    if (!actionBtnsRef.current.has(index)) return;
    actionBtnsRef.current.delete(index);
    sendInput(index, false);
  }, []);

  const bind = useCallback((index) => ({
    onTouchStart: (e) => onBtnDown(index, e),
    onTouchEnd:   (e) => onBtnUp(index, e),
    onTouchCancel:(e) => onBtnUp(index, e),
  }), [onBtnDown, onBtnUp]);

  /* ── Active arrows ── */
  const up    = activeDir?.includes('up');
  const down  = activeDir?.includes('down');
  const left  = activeDir?.includes('left');
  const right = activeDir?.includes('right');

  return (
    <div className="mgp">
      <div className="mgp-shoulders">
        <button className="mgp-btn mgp-shoulder" {...bind(BTN.L)}>L</button>
        <button className="mgp-btn mgp-shoulder" {...bind(BTN.R)}>R</button>
      </div>

      <div className="mgp-main">
        <div
          className={`mgp-dpad${activeDir ? ' dpad-on' : ''}`}
          ref={dpadRef}
          onTouchStart={onDpadTouch}
          onTouchMove={onDpadMove}
          onTouchEnd={onDpadEnd}
          onTouchCancel={onDpadEnd}
        >
          <span className={`dp dp-u${up ? ' hi' : ''}`}>▲</span>
          <span className={`dp dp-r${right ? ' hi' : ''}`}>►</span>
          <span className={`dp dp-d${down ? ' hi' : ''}`}>▼</span>
          <span className={`dp dp-l${left ? ' hi' : ''}`}>◄</span>
          <div className="dp-dot" />
        </div>

        <div className="mgp-actions">
          <button className="mgp-btn mgp-ab mgp-b" {...bind(BTN.B)}>B</button>
          <button className="mgp-btn mgp-ab mgp-a" {...bind(BTN.A)}>A</button>
        </div>
      </div>

      <div className="mgp-center">
        <button className="mgp-btn mgp-meta" {...bind(BTN.SELECT)}>SELECT</button>
        <button className="mgp-btn mgp-meta" {...bind(BTN.START)}>START</button>
      </div>
    </div>
  );
}
