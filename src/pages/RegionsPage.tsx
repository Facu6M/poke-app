import { Link } from "react-router-dom";
import "../styles/RegionsPage.css";

const regions = ["kanto", "johto", "hoenn", "sinnoh"];

const RegionsPage = () => {
  return (
    <div className="page-container">
      <h1>Select a Region</h1>
      <ul className="region-list">
        {regions.map((region) => (
          <li key={region} className="region-item">
            <Link to={`/region/${region}`} className="region-link">
              {region.charAt(0).toUpperCase() + region.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="favorites-link-container">
        <Link to="/favorites" className="favorites-link">
          Go to Favorites
        </Link>
      </div>
    </div>
  );
};

export default RegionsPage;
