import { EDirection } from "./hooks/types";
import type { IConfig } from "./types";

export const config: IConfig = {
    matrixSize: 9,
    direction: EDirection.IDLE,
    gameState: "start-menu",
    gameSpeed: 300 /* lower faster */
}