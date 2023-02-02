import React from "react";
import styled from "styled-components";

const Baslik = styled.h4`
  font-weight: 1000;
  font-size: 1.1rem;
  color: ${(props) => (props.color ? props.color : "blue")};
`;

const ExplanationSection = ({ copyright, explanation }) => {
  return (
    <div className="expBg">
      <div className="containerExp">
        <div>{explanation}</div>
        <Baslik color="red">
          Illustration Credit & Copyright: {copyright}
        </Baslik>
      </div>
    </div>
  );
};

export default ExplanationSection;
