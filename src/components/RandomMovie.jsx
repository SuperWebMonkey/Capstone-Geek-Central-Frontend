/**
 *
 *  Component that gets a random quote from the zenquote api
 *  Source/Docs of the quote api: https://docs.zenquotes.io/zenquotes-documentation/#api-structure
 *  Hopefully fullfills the api requirement for the project
 *
 *  problems: May need to get an api key from zenquotes
 *  May need to replace with movie recommendations such as OMDBI
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/RandomMovie.css";

function RandomMovie() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  // Uses axios to get a random quote from the zenquote api
  const getMovie = async () => {
    // Used to add cor policy to the api
    const cors_url = "https://cors-anywhere.herokuapp.com/"; // for testing purposes, not recommended for production
    const randomPage = Math.floor(Math.random() * 150) + 1;
    const movieUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${randomPage}`;

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(movieUrl); // Fetch from OMDB movie API

      // Pick a random movie from the list
      const randomMovieIndex = Math.floor(
        Math.random() * response.data.Search.length
      );
      const randomMovie = response.data.Search[randomMovieIndex];
      console.log(randomMovie);

      const randomMovieUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${randomMovie.imdbID}`;

      // Fetch detailed information of the selected movie
      const movieDetails = await axios.get(randomMovieUrl);
      setMovie(movieDetails.data);
      console.log(movieDetails.data);
    } catch (err) {
      setError("Failed to fetch movie data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [apiKey]);

  return (
    // Retrieve a random quote
    <div className="movie-section">
      {loading ? (
        <p>Loading Movie...</p> // Show loading while waiting for the movie data
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="movie-card">
          <img id="movie-img" src={movie.Poster} alt={movie.Title} />
          <h1 id="movie-title">
            {movie.Title} ({movie.Year})
          </h1>
        </div>
      )}
    </div>
  );
}

export default RandomMovie;
