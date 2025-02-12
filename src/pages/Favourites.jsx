import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favourites.css";

const Favourites = () => {
  const { favourites } = useMovieContext();

  return favourites.length > 0 ? (
    <div className="favourites">
      <h2>Your Favourites</h2>
      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="favourites-empty">
      <h2>No Favourite Movie Yet</h2>
      <p>Start Adding movies to your favourites and they will appear here</p>
    </div>
  );
};

export default Favourites;
