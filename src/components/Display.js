import React from "react";
import { styled } from "styled-components";

const Display = ({ gameOver, text }) => {
  return (
    <>
      {gameOver ? (
        <GameOver gameOver={gameOver}>{text}</GameOver>
      ) : (
        <DisplayWrapper>{text}</DisplayWrapper>
      )}
    </>
  );
};

const DisplayWrapper = styled.main`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: black;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;

const GameOver = styled(DisplayWrapper)`
  justify-content: center;
`;

export default Display;
