import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return; //To prevent searching for spaces
    if (loading) return; //To prevent searching when already searching for something else

    setLoading(true);
    try {
      const searchedMovies = await searchMovies(search);
      setMovies(searchedMovies);
      setError(null)
    } catch (err) {
      console.log(err);
      setError("Failed to searh movies...");
    } finally {
      setLoading(false);
    }
  };
  //1:20:00
  //Problem is that it starts searching before submitting the form 
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for movies.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>

      {error && <div className="error-message">{error} </div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title
                .toLocaleLowerCase()
                .startsWith(search.toLowerCase()) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
