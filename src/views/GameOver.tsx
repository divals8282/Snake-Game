import { useData } from "../hooks/useData"

export const GameOver = () => {
    const data = useData();

    if (!data) {
        return null;
    }

    const { dispatch,
        state: { score }
    } = data;

    return (
        <div className="game-over">
            <h1>Game Over</h1>
            <h1>Score: {score}</h1>
            <button onClick={() => dispatch({ type: "GAME_STATE", payload: "playing" })}>Again</button>
            <button onClick={() => dispatch({ type: "GAME_STATE", payload: "start-menu" })}>Start Menu</button>
        </div>
    )
}