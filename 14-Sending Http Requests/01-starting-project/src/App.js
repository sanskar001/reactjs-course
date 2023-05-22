// import React, { useState } from "react";

// import MoviesList from "./components/MoviesList";
// import "./App.css";

// function App() {
//   const [moviesList, setMoviesList] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function fetchMoviesHandler() {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const response = await fetch("https://swapi.dev/api/films/");

//       if (!response.ok) {
//         throw new Error(`Sorry something went wrong (${response.status})`);
//       }

//       const data = await response.json();
//       const movies = data.results.map((movie, index) => {
//         return {
//           id: movie.episode_id,
//           title: movie.title,
//           releaseDate: movie.release_date,
//           openingText: movie.opening_crawl,
//         };
//       });

//       // Updating movies list
//       setIsLoading(false);
//       setMoviesList(movies);
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <button onClick={fetchMoviesHandler}>Fetch Movies</button>
//       </section>
//       <section>
//         {isLoading && !error && <p>Loading...</p>}
//         {isLoading && error && (
//           <p style={{ color: "red", fontWeight: "600" }}>{error}</p>
//         )}
//         {!isLoading && moviesList.length === 0 && <p>Fetch Your Movies!</p>}
//         <MoviesList movies={moviesList} />
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;

// ========================================================================

// Chapter: Using useEffect for Http Request
/*
- Suppose if we want to fetch data once just after page load, for that we need to use "useEffect" hook. 
*/

import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, []);

  // async function fetchMoviesHandler() {
  //   try {
  //     setIsLoading(true);
  //     setError(null);
  //     const response = await fetch("https://swapi.dev/api/films/");

  //     if (!response.ok) {
  //       throw new Error(`Sorry something went wrong (${response.status})`);
  //     }

  //     const data = await response.json();
  //     const movies = data.results.map((movie, index) => {
  //       return {
  //         id: movie.episode_id,
  //         title: movie.title,
  //         releaseDate: movie.release_date,
  //         openingText: movie.opening_crawl,
  //       };
  //     });

  //     // Updating movies list
  //     setIsLoading(false);
  //     setMoviesList(movies);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // }

  // useCallback(async function() {}, [dependencies]);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error(`Sorry something went wrong (${response.status})`);
      }

      const data = await response.json();
      const movies = data.results.map((movie, index) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });

      // Updating movies list
      setIsLoading(false);
      setMoviesList(movies);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && !error && <p>Loading...</p>}
        {isLoading && error && (
          <p style={{ color: "red", fontWeight: "600" }}>{error}</p>
        )}
        {!isLoading && moviesList.length === 0 && <p>Fetch Your Movies!</p>}
        <MoviesList movies={moviesList} />
      </section>
    </React.Fragment>
  );
}

export default App;
