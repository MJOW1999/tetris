export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Creates a stage based on if a tetris peice has interacted with a particular cell or not
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
