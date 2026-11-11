import { EDirection } from "./hooks/types";
import type { IConfig } from "./types";

export const config: IConfig = {
    matrixSize: 20,
    direction: EDirection.IDLE,
    prevDirection: EDirection.IDLE
}