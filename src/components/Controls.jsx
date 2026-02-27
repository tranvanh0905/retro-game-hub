import './Controls.css';

const KEYS = [
  ['D-Pad', 'Arrows', '🎮'],
  ['A', 'X', null],
  ['B', 'Z', null],
  ['Start', 'Enter', null],
  ['Select', 'Shift', null],
  ['L', 'Q', null],
  ['R', 'E', null],
];

export default function Controls() {
  return (
    <div className="ctrl-bar">
      <div className="ctrl-title">⌨ CONTROLS</div>
      <div className="ctrl-list">
        {KEYS.map(([k, v]) => (
          <div key={k} className="ctrl">
            <span className="ctrl-key">{k}</span>
            <span className="ctrl-arrow">→</span>
            <kbd className="ctrl-kbd">{v}</kbd>
          </div>
        ))}
      </div>
    </div>
  );
}
