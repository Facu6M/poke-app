import { useStore } from "../utils/useStore";
import { Link } from "react-router-dom";
import "../styles/FavoritesPage.css";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useStore();

  return (
    <div className="favorites-container">
      <h1>Your Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p>No favorite Pokémon added yet.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((id) => (
            <li key={id} className="favorite-item">
              <div className="favorite-info">
                <Link to={`/pokemon/${id}`} className="favorite-link">
                  Pokémon #{id}
                </Link>
                <button
                  onClick={() => removeFavorite(id)}
                  className="remove-favorite-button"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
