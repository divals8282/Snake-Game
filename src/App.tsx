import { useControls, useData } from "./hooks";

function App() {
  const direction = useControls();
  const { dispatch, state } = useData();

  const renderMatrix = () => {
    for(let i = 0; i < state.matrixSize; i++) {
      const renderCell = () => {
        for(let j = 0; j < state.matrixSize; j++) {
          return (
            <div className="game__matrix-cell" key={j}>
              
            </div>
          )
        }
      }

      return (
        <div className="game__matrix-row" key={i}>
          {renderCell()}
        </div>
      )
    }
  }

  return (
    <div className="game">
      <div className="game__matrix">
        {renderMatrix()}
      </div>
    </div>
  )
}

export default App
