// Define the shape of each tetromino

export const TETROMINOES = {
  // Empty tetromino, added here for ease
  0: { shape: [[0]], color: "0, 0, 0" },
  // Line tetromino
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223, 173, 36",
  },
  // Square tetromino
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "223, 217, 36",
  },
  // squiggly/ skew tetrimono
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48, 211, 56",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "132, 61, 198",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      ["T", "Z", "Z"],
      [0, 0, 0],
    ],
    color: "227, 78, 78",
  },
};

export const randomTetromino = () => {
  const tetrimonoes = "IJLOSTZ";
  const random = tetrimonoes[Math.floor(Math.random() * tetrimonoes.length)];
  return TETROMINOES[random];
};