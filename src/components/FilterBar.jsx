import { GAMES } from '../data/games';
import './FilterBar.css';

export default function FilterBar({ sort, setSort }) {
  const nesCount = GAMES.filter(g => g.system === 'nes').length;
  return (
    <div className="fbar">
      <div className="fbar-systems">
        <span className="fbar-count">🎮 {nesCount} NES Games</span>
      </div>
      <div className="fbar-right">
        <select className="select-s" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
        </select>
      </div>
    </div>
  );
}
