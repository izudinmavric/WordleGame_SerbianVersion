import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "BRAVO!!! Pogodili ste!"
          : "Nažalost više sreće drugi put"}
      </h3>
      <h1>Reč koju smo tražili je: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Pogodili ste u {currAttempt.attempt} pokušaju</h3>
      )}
    </div>
  );
};

export default GameOver;
