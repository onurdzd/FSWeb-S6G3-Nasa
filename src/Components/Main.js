import React from "react";
import ImgSection from "./ImgSection";
import ExplanationSection from "./ExplanationSection";

const Main = (props) => {
  return (
    <div className="container">
      <p>
        <a
          href="https://apod.nasa.gov/apod/archivepix.html"
          className="App-link"
        >
          Discover the cosmos!{" "}
        </a>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
      <h4>{props.date}</h4>
      <h3>{props.title} </h3>
      <div className="section">
        <input
          value={props.dateValue}
          type="date"
          onChange={(e) => props.setDateValue(e.target.value)}
        ></input>
        <div className="imgDiv">
          <a href={props.hdurl}>
            <ImgSection url={props.url}></ImgSection>
          </a>
        </div>
      </div>
      <ExplanationSection
        copyright={props.copyright}
        explanation={props.explanation}
      ></ExplanationSection>
    </div>
  );
};

export default Main;
