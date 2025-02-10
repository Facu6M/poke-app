import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPokemonList } from "../utils/api";
import { PokemonList } from "../types/pokemon";
import "../styles/PokemonListPage.css";

const PokemonListPage = () => {
  const { regionName } = useParams();
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (regionName) {
      fetchPokemonList(regionName)
        .then((data) => {
          setPokemonList(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [regionName]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="primary-text">
        {regionName && regionName.charAt(0).toUpperCase() + regionName.slice(1)}
        Pokémon
      </h1>
      {pokemonList.length === 0 ? (
        <p>No Pokémon found for this region.</p>
      ) : (
        <div className="pokemon-list-container">
          {pokemonList.map((pokemon) => (
            <div className="pokemon-card" key={pokemon.name}>
              <Link
                to={`/pokemon/${pokemon.name}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h3 className="pokemon-title">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h3>
                <p className="pokedex-info">
                  Pokédex: {pokemon.url.split("/")[6]}
                </p>
                <button className="details-button">Go to Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonListPage;
