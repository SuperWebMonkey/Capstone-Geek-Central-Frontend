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
import "../styles/RandomQuote.css";

function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  const movieUrl = "";

  // Uses axios to get a random quote from the zenquote api
  const getQuote = async () => {
    // Used to add cor policy to the api
    const cors_url = "https://cors-anywhere.herokuapp.com/"; // for testing purposes, not recommended for production
    const api_quote_url = `${cors_url}https://zenquotes.io/api/random`;
    const randomPage = Math.floor(Math.random() * 150) + 1;
    const movieUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${randomPage}`;

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(api_quote_url); // Fetch from ZenQuotes API
      console.log(response.data[0]);
      setQuote(response.data[0]);
    } catch (err) {
      setError("Failed to fetch quote. May be a fetch limit.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    // Retrieve a random quote
    <div className="quote-section">
      {loading ? (
        <p>Loading Quote...</p> // Show loading while waiting for the quote
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="quote-card">
          <p className="author">{quote.a}</p> {/* Author */}
          <p className="famous-quote">" - {quote.q}"</p> {/* Quote */}
        </div>
      )}
    </div>
  );
}

export default RandomQuote;
