import { EDirection } from "./hooks/types";
import type { IConfig } from "./types";

export const config: IConfig = {
    matrixSize: 21,
    direction: EDirection.IDLE,
    prevDirection: EDirection.IDLE,
    gameState: "paused",
    gameSpeed: 40
}