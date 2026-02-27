import './Controls.css';

const KEYS = [
  ['D-Pad', 'Arrows'], ['A', 'X'], ['B', 'Z'],
  ['Start', 'Enter'], ['Select', 'Shift'], ['L', 'Q'], ['R', 'E'],
];

export default function Controls() {
  return (
    <div className="ctrl-bar">
      {KEYS.map(([k, v]) => (
        <div key={k} className="ctrl">
          <div className="ctrl-key">{k}</div>
          <div className="ctrl-val">{v}</div>
        </div>
      ))}
    </div>
  );
}
