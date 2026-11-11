import { useReducer } from "react"
import { config } from "../config"
import type { IConfig, TAction } from "../types";

export const useData = () => {
    const [dispatch, state] = useReducer((state: IConfig, action: TAction) => {
        const newState = { ...state };

        switch(action.type) {
            case "SET_DIRECTION":
                newState.prevDirection = state.direction;
                newState.direction = action.payload;
                break;
        }

        return newState;
    }, config);

    
    return { dispatch, state };
}