export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Creates a stage based on if a tetris peice has interacted with a particular cell or not
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // Check we are on a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // Check we are within the grid height wise (y)
          // Add that we can't go through the bottom of the grid
          !stage[y + player.pos.y + moveY] ||
          // Check that we are within the grid width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Check that the cell we're moving to can be collided with
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
