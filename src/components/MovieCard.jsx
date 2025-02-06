const MovieCard = ({ movie }) => {
  function addToFavourite() {
    alert("Favourite Clicked");
  }
  return (
    <div>
      <div>
        <img src={movie.src} alt={movie.title} />
        <div>
          <button onClick={addToFavourite}>Kalp Gelecek</button>
        </div>
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
