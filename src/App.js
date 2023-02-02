import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 50vh;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  padding-top: 5rem;
`;

function App() {
  const [data, setData] = useState({});
  const [dateValue, setDateValue] = useState(new Date());

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
          hdurl: response.data.hdurl,
        });
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WO6Dip7hem2eo1Bh97e0XbnWKYr0IvK3Ved1996Q&date=" +
          dateValue
      )
      .then((response) => {
        setData({
          copyright: response.data.copyright,
          title: response.data.title,
          date: response.data.date,
          explanation: response.data.explanation,
          url: response.data.url,
          hdurl: response.data.hdurl,
        });
      });
  }, [dateValue]);

  const { copyright, date, explanation, title, url, hdurl } = data;

  return (
    <div className="App container">
      <Header />
      {!url ? (
        <Wrapper>Sayfa Yükleniyor...</Wrapper>
      ) : (
        <Main
          title={title}
          url={url}
          date={date}
          explanation={explanation}
          copyright={copyright}
          hdurl={hdurl}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
      )}

      <Footer></Footer>
    </div>
  );
}

export default App;
