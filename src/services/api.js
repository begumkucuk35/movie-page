const API_KEY = "a217830e1643ec456a253e6ecdf3a20b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
   const data = await response.json();
   return data.results; // Note: 'results', not 'result'
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
