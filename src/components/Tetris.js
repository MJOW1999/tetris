import React, { useState } from "react";
import { styled } from "styled-components";
import Description from "./Description";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage, checkCollision } from "../helpers";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  // Game actions
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset to default
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const dropPlayer = () => {
    drop();
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // The game is over
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        default:
          break;
        // Left key
        case 37:
          movePlayer(-1);
          break;
        // Right key
        case 39:
          movePlayer(1);
          break;
        case 40:
          dropPlayer();
      }
    }
  };

  return (
    <TetrisWrapper role="button" tabIndex={0} onKeyDown={(e) => move(e)}>
      <Description />
      <Container>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : (
            <section>
              <Display text={"Score"} />
              <Display text={"Rows"} />
              <Display text={"Level"} />
            </section>
          )}
          <StartButton callback={startGame} />
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
