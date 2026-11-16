import { EDirection } from "./hooks/types";
import type { IConfig } from "./types";

export const config: IConfig = {
    matrixSize: 21,
    direction: EDirection.IDLE,
    gameState: "start-menu",
    gameSpeed: 100 /* lower faster */
}