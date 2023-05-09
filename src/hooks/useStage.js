import { useState, useEffect } from "react";
import { createStage } from "../helpers";

// Create the stage here
export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Draw a new stage
      console.log({ player });
      player.tetromino.forEach((row, y) => {
        console.log({ row });
        row.forEach((value, x) => {
          console.log({ value });
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // Check for a collision
      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };
    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
};
