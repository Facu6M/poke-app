import axios from "axios";

const getPokemonFromPokedex = async (pokedexUrl: string) => {
  try {
    const pokedexResponse = await axios.get(pokedexUrl);
    return pokedexResponse.data.pokemon_entries.map(
      (entry: { pokemon_species: { name: string; url: string } }) =>
        entry.pokemon_species
    );
  } catch (error) {
    console.error("Error fetching Pokémon from Pokédex:", error);
    return [];
  }
};

export const fetchPokemonList = async (region: string) => {
  try {
    const regionResponse = await axios.get(
      `https://pokeapi.co/api/v2/region/${region}`
    );
    const pokedexUrls = regionResponse.data.pokedexes.map(
      (pokedex: { url: string }) => pokedex.url
    );

    const allPokemon = await Promise.all(
      pokedexUrls.map((url: string) => getPokemonFromPokedex(url))
    );

    const flattenedPokemon = allPokemon.flat();
    const limitedPokemon = flattenedPokemon.slice(0, 50);

    return limitedPokemon;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export const fetchPokemonDetail = async (pokemonId: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokémon details", error);
    return null;
  }
};
