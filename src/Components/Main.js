import React from "react";
import ImgSection from "./ImgSection";
import ExplanationSection from "./ExplanationSection";
import styled from "styled-components";
import { Baslik } from "./ExplanationSection";

const StyledA = styled.a`
  font-weight: 800;
`;

const StyledP = styled.p`
  text-align: center;
  padding-top: 1rem;
  font-weight: 400;
  color: black;
`;

const Main = (props) => {
  return (
    <div className="container">
      <StyledP>
        <StyledA href="https://apod.nasa.gov/apod/archivepix.html">
          Discover the cosmos!{" "}
        </StyledA>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </StyledP>
      <Baslik>{props.date}</Baslik>
      <Baslik>{props.title} </Baslik>
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
