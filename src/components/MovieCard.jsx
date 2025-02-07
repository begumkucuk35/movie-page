import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  function addToFavourite() {
    alert("Favourite Clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.src} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={addToFavourite}>Kalp Gelecek</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
