import type { EDirection } from "./hooks/types";

declare global {
    interface Window {
        movementIntervalId: number;
    }
}

export type TGameState = "playing" | "start-menu" | "gameover"

export interface IConfig {
    matrixSize: number;
    direction: EDirection;
    gameState: TGameState;
    gameSpeed: number;
}

export type TAction =
    | { type: "SET_DIRECTION"; payload: EDirection }
    | { type: "FRAME" }
    | { type: "GAME_STATE", payload: TGameState }
    | { type: "RESET" };