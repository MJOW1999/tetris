import React from "react";
import Cell from "./Cell";
import { styled } from "styled-components";

const Stage = ({ stage }) => {
  return (
    <Grid width={stage[0].length} height={stage.length}>
      {/* Create initial stage (should be empty cells) */}
      {stage?.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
    </Grid>
  );
};

const Grid = styled.main`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;

export default Stage;
