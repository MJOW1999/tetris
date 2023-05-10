import { useCallback, useEffect, useState } from "react";

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const calcScore = useCallback(() => {
    let linePoints = [40, 100, 300, 1200];
    if (rowsCleared > 0) {
      // Formula for Tetris scoring
      setScore((prev) => prev + linePoints[rowsCleared - 1]);
      setRows((prev) => prev + rowsCleared);
    }
  }, [rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
