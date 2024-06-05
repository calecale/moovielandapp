import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import './App.css';
import SearchIcon from './search.svg';

//created an api url
const API_URL = 'https://www.omdbapi.com?apikey=c3721b49';

const movie1 = 
{
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const App = () => {

    //novi state
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //f-ja za pretrazivanje filmova po nazivu
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search); //radi api
        
    }

    useEffect(() => {
        searchMovies('Avengers');

    }, []); //prima prazan niz ako zelimo da je pozovemo samo u startu
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                /> 
                <img
                src={SearchIcon}
                alt="search icon"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))} 
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

            }

        
        </div> 
    );
}

export default App;