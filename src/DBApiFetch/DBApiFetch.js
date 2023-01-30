import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie";

const firebase_url = "https://react-course-fd4f6-default-rtdb.europe-west1.firebasedatabase.app/";

function DBApiFetch() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(firebase_url + 'movies.json')
            if (!response.ok) {
                throw new Error(response.statusMessage);
            }
            const data = await response.json();
            const loadedMovies = [];
            for (const key in data) {
                const movie = data[key];
                loadedMovies.push({
                    id: key,
                    title: movie.title,
                    openingText: movie.openingText,
                    releaseDate: movie.releaseDate
                })
            }
            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler])

    async function addMovieHandler(movie) {
        const response = await fetch(firebase_url + 'movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    let content = <p>Found no movie.</p>
    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>
    }

    return (
      <React.Fragment>
          <section>
              <AddMovie onAddMovie={addMovieHandler}/>
          </section>
          <section>
              <button onClick={fetchMoviesHandler}>Fetch Movies</button>
          </section>
          <section> {content} </section>
      </React.Fragment>
    );
}

export default DBApiFetch;
