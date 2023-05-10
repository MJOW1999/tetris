import React, { useState } from "react";
import { styled } from "styled-components";
import Description from "./Description";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage, checkCollision } from "../helpers";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  // Game actions
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset to default
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Level increases every 5 rows cleared
    if (rows > level * 5) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / level + 200);
    }
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

  const keyUp = ({ keyCode }) => {
    if (!gameOver && keyCode === 40) {
      setDropTime(1000);
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
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
        // Down key
        case 40:
          dropPlayer();
          break;
        // Up key
        case 38:
          playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <TetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <Description />
      <Container>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <section>
              <Display gameOver={gameOver} text={"Game Over"} />
              <Display text={`Final Score: ${score}`} />
            </section>
          ) : (
            <section>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows Cleared: ${rows}`} />
              <Display text={`Level: ${level}`} />
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
