import { useReducer } from "react"
import { config } from "../config"
import type { IConfig, TAction } from "../types";
import type { ISnake } from "./types";

export const useData = () => {
    const [state, dispatch] = useReducer((state: IConfig & ISnake, action: TAction) => {
        const newState = { ...state };

        switch (action.type) {
            case "SET_DIRECTION":
                newState.prevDirection = state.direction;
                newState.direction = action.payload;
                break;
        }

        return newState;
    }, {
        ...config,
        head: { x: (config.matrixSize / 2) + 1, y: (config.matrixSize / 2) + 1 },
        tail: []
    });


    return { dispatch, state };
}