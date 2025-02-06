import { useState } from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const [search, setSearch] = useState("");
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ]
    function handleSearch(e){
        e.preventDefault();
        alert(search)
    }
  return (
    <div>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Search for movies..' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>
        <div>
            {movies.map((movie) => (
                movie.title.toLocaleLowerCase().startsWith(search.toLowerCase()) && <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
  )
}

export default Home