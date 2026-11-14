import { useData } from "./hooks";
import { GameOver } from "./views/GameOver";
import { Menu } from "./views/Menu";
import { Game } from "./views/Game";

function App() {
  const { state: { gameState } } = useData();

  switch (gameState) {
    case "gameover":
      return <GameOver />
    case "start-menu":
      return <Menu />
    case "playing":
      return <Game />
  }
}

export default App
