import React, { memo } from "react";
import { styled } from "styled-components";

const Description = () => {
  return (
    <section>
      <Title>Tetris</Title>
      <Rules>
        <u>Rules</u>: Move your pieces in 90° directions.
        <br />
        You can only remove blocks from the screen by filling all the blank
        space in a line.
        <br /> Your game is over when you reach the top of the screen with your
        blocks!
      </Rules>
    </section>
  );
};

const Title = styled.h1`
  font-family: Pixel, Arial, Helvetica, sans-serif;
  color: white;
`;

const Rules = styled.p`
  font-family: Pixel, Arial, Helvetica, sans-serif;
  color: #b3b3b3;
  line-height: 1.75;
  letter-spacing: 2px;
  max-width: min(900px, 90vw);
  margin: 0 auto;
`;
export default memo(Description);
