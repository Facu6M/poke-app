import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../utils/api";
import { useStore } from "../utils/useStore";
import {
  PokemonAbility,
  PokemonData,
  PokemonStat,
  PokemonType,
} from "../types/pokemon";
import "../styles/PokemonDetailPage.css";

const PokemonDetailPage = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite, removeFavorite } = useStore();

  useEffect(() => {
    if (pokemonId) {
      fetchPokemonDetail(pokemonId)
        .then((data) => {
          setPokemon(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [pokemonId]);

  if (loading) return <p>Loading...</p>;

  const isFavorite = favorites.includes(pokemonId!);
  return (
    <div className="pokemon-detail-container">
      {pokemon && (
        <>
          <h1 className="pokemon-name">{pokemon.name}</h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-image"
          />
          <div className="pokemon-info">
            <div className="pokemon-types">
              <h2>Types</h2>
              <div className="types-container">
                {pokemon.types.map((type: PokemonType) => (
                  <div
                    key={type.type.name}
                    className={`type-card type-${type.type.name}`}
                  >
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            <div className="pokemon-abilities">
              <h2>Abilities</h2>
              <div className="abilities-container">
                {pokemon.abilities.map((ability: PokemonAbility) => (
                  <div key={ability.ability.name} className="ability-card">
                    {ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            <div className="pokemon-stats">
              <h2>Stats</h2>
              <ul>
                {pokemon.stats.map((stat: PokemonStat) => (
                  <li key={stat.stat.name}>
                    <strong>
                      {stat.stat.name.charAt(0).toUpperCase() +
                        stat.stat.name.slice(1)}
                      :
                    </strong>{" "}
                    {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className="favorite-button"
            onClick={() =>
              isFavorite ? removeFavorite(pokemonId!) : addFavorite(pokemonId!)
            }
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </>
      )}
    </div>
  );
};

export default PokemonDetailPage;
