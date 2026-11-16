import { useData } from "../hooks"

export const Menu = () => {
    const data = useData();

    if (!data) {
        return null;
    }

    const { dispatch,

    } = data;
    return (
        <div className="menu">
            <h1>Snake Game</h1>
            <button onClick={() => dispatch({ type: "GAME_STATE", payload: "playing" })}>Start Game</button>
        </div>
    )
}