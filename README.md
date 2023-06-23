# Tetris

> React based Tetris app

## Table of contents

- [Tutorial](#tutorial)
- [Technologies](#technologies)
- [Inspiration](#inspiration)
- [Process](#process)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## Tutorial

A short [tutorial](https://www.loom.com/share/bf69f610d46d4fe4b04bf08e84d53653) of the deployed Tetris app

## Technologies

- React
- JavaScript
- Styled Components

## Inspiration

Wanted to practice some React fundamentals (**hooks** (`useState`, `useEffect`, `useCallback`, `useMemo`) and custom hooks) as well as build a fun app around one of my favourite games!

## Process

- Create a React app and install styled components
- Find [Futura Black](https://fontsgeek.com/fonts/Futura-Black) font
- Create initial components required for the game: `Tetris`, `StartButton`, `Stage`, `Display` and `Cell`.
- Create a helper function which renders the stage.
- Create shape for each tetromino and a function to randomise it.
- Style the webpage using styled components.
  - Create `Description` component which sets out the [rules](https://www.interaction-design.org/literature/article/a-game-explained-an-example-of-a-single-game-and-how-it-meets-the-rules-of-fun#:~:text=as%20you%20can.-,Rules,needed%20structure%20to%20our%20play.) of the game.
- Create custom hooks: `useInterval` (_borrowed from Dan Abramov_), `usePlayer`, `useStage` and `useGameStatus`
- Collision detection to stop tetrominoes from moving outside of the game grid and losing shape.
- Rotate the tetrominoes by 90 degrees. Collision detection is included here too
- Clear the rows when tetris occurs and add a drop time, so the tetrominoes drop automatically
- Add scoring system
- Deploy using [Netlify](https://mjow1999-tetris.netlify.app/)

## Features

- Functional Tetris game made using React and styled-components
- Stylish and Accessible webpage
- Scoring based on [original Nintendo system](https://tetris.wiki/Scoring#Original_Nintendo_scoring_system)

To-do list:

- [ ] Monitor edge case errors

## Status

Project is: **_completed_**

## Contact

Created by [@MJOW1999](https://github.com/MJOW1999)

Feel free to contact me:

- Email: michael.jow.williams@gmail.com
- LinkedIn: [Michael Williams](https://www.linkedin.com/in/michael-williams-17a9b81a0)

Also follow my Twitter: [@michWills99](https://twitter.com/michWills99)
