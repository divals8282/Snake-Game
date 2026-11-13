import type { EDirection } from "./hooks/types";

declare global {
    interface Window {
        movementIntervalId: number;
    }
}

export interface IConfig {
    matrixSize: number;
    direction: EDirection;
    prevDirection: EDirection;
    gameState: "playing" | "paused" | "gameover";
    gameSpeed: number;
}

export type TAction = 
| { type: "SET_DIRECTION"; payload: EDirection }
| { type: "FRAME" };