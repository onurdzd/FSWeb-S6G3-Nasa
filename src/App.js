import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WO6Dip7hem2eo1Bh97e0XbnWKYr0IvK3Ved1996Q"
      )
      .then((response) => {
        setData({
          copyright: response.data.copyright,
          title: response.data.title,
          date: response.data.date,
          explanation: response.data.explanation,
          url: response.data.url,
        });
      });
  }, []);

  const { copyright, date, explanation, title, url } = data;

  return (
    <div className="App">
      <Header title={title} />
      <p>
        Discover the cosmos! Each day a different image or photograph of our
        fascinating universe is featured, along with a brief explanation written
        by a professional astronomer.
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Main
        url={url}
        date={date}
        explanation={explanation}
        copyright={copyright}
      />
    </div>
  );
}

export default App;
