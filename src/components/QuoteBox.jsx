import { useEffect, useContext, useState } from "react";
import { QuotesContext } from "../contexts/QuotesContext";

const QuoteBox = () => {
  const { quotes, setQuotes } = useContext(QuotesContext);
  const [randomQuote, setRandomQuote] = useState(
    JSON.parse(localStorage.getItem("randomQuote")) || {}
  );
  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      localStorage.setItem("quotes", JSON.stringify(data.quotes));
      setQuotes(data.quotes);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      localStorage.setItem("randomQuote", JSON.stringify(randomQuote));
      setRandomQuote(randomQuote);
    } catch (error) {
      console.error("Failed to fetch quotes", error);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="text">
        {randomQuote && randomQuote.quote}
      </div>
      <div id="author" className="author">
        {randomQuote && randomQuote.author}
      </div>
      <div className="clickables">
        <a
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%20hear%20a%20voice%20within%20you%20say%20%E2%80%9Cyou%20cannot%20paint%2C%E2%80%9D%20then%20by%20all%20means%20paint%20and%20that%20voice%20will%20be%20silenced.%22%20Vincent%20Van%20Gogh"
          target="_blank"
          id="tweet-quote"
          className="tweet-quote"
        >
          <svg viewBox="0 0 448 512">
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z" />
          </svg>
        </a>
        <button id="new-quote" className="new-quote" onClick={fetchQuotes}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
