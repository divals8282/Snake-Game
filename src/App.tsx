import { useEffect } from "react";
import { useControls, useData } from "./hooks";

function App() {
  const direction = useControls();
  const { dispatch, state } = useData();

  useEffect(() => {
    dispatch({ type: "SET_DIRECTION", payload: direction });
  }, [direction]);

  useEffect(() => {
    if (state.gameState === "playing") {
      window.movementIntervalId = setInterval(() => dispatch({ type: "FRAME" }), state.gameSpeed);
    } else {
      clearInterval(window.movementIntervalId);
    }

    return () => {
      clearInterval(window.movementIntervalId);
    };
  }, [state.gameState]);

  const renderGame = () => {
    const matrix: (string | number)[][] = [];

    for (let i = 0; i < state.matrixSize; i++) {
      matrix[i] = [];
      for (let j = 0; j < state.matrixSize; j++) {
        const isHead = state.head.x === j && state.head.y === i;
        const isTail = state.tail.some(tail => tail.x === j && tail.y === i);

        if (isHead)
          matrix[i].push("H");
        else if (isTail)
          matrix[i].push("T");
        else if (state.fruit && state.fruit.x === j && state.fruit.y === i)
          matrix[i].push("F");
        else
          matrix[i].push("");
      }
    }

    return matrix.map((row, i) => (
      <div key={i + 1} className="game__matrix__row" style={styles.game__matrix__row}>
        {row.map((cell, j) => (
          <div key={j + 1} className="game__matrix__cell" style={styles.game__matrix_cell}>
            {cell}
          </div>
        ))}
      </div>
    ));
  }

  return (
    <div className="game" style={styles.game}>
      <div className="game__matrix" style={styles.game__matrix}>
        {renderGame()}
      </div>
    </div>
  )
}

const styles = {
  game: {

  },
  game__matrix: {

  },
  game__matrix__row: {
    display: "flex",
  },
  game__matrix_cell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "0 0 20px",
    height: "20px",
    border: "1px solid black"
  }
}

export default App
