import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <main>
      <Stage />
      <aside>
        <section>
          <Display text={"Score"} />
          <Display text={"Rows"} />
          <Display text={"Level"} />
        </section>
        <StartButton />
      </aside>
    </main>
  );
};

export default Tetris;
