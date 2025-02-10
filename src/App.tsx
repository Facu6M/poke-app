import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegionsPage from "./pages/RegionsPage";
import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegionsPage />} />
        <Route path="/region/:regionName" element={<PokemonListPage />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
