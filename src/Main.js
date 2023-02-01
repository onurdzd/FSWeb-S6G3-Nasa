import React from "react";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <div>
      <p>
        Discover the cosmos! Each day a different image or photograph of our
        fascinating universe is featured, along with a brief explanation written
        by a professional astronomer.
      </p>
      <div>{props.date}</div>
      <div>
        <img src={props.url} alt="gununresmi" />
      </div>
      <div>{props.title}</div>
      <div>Illustration Credit & Copyright: {props.copyright}</div>
      <div>{props.explanation}</div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
