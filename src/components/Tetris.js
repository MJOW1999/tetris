import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import { createStage } from "../helpers";
import { styled } from "styled-components";
import Description from "./Description";

const Tetris = () => {
  return (
    <TetrisWrapper>
      <Description />
      <Container>
        <Stage stage={createStage()} />
        <aside>
          <section>
            <Display text={"Score"} />
            <Display text={"Rows"} />
            <Display text={"Level"} />
          </section>
          <StartButton />
        </aside>
      </Container>
    </TetrisWrapper>
  );
};

const TetrisWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  background-size: cover;
  overflow: hidden;
`;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

export default Tetris;
