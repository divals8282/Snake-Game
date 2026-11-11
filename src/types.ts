import type { EDirection } from "./hooks/types";

export interface IConfig {
    matrixSize: number;
    direction: EDirection;
    prevDirection: EDirection;
}

export type TAction = 
| { type: "SET_DIRECTION"; payload: EDirection }