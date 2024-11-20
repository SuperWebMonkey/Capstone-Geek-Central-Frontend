/**
 *  Component that gets a random quote from the zenquote api
 *  Source/Docs of the quote api: https://docs.zenquotes.io/zenquotes-documentation/#api-structure
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getQuote = async () => {
    const api_quote_url = "https://zenquotes.io/api/random";
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
          <p className="author">- {quote.a}</p> {/* Display the author */}
          <p className="-famous-quote">"{quote.q}"</p> {/* Display the quote */}
        </div>
      )}
    </div>
  );
}

export default Quotes;
