import { useReducer } from "react"
import { config } from "../config"
import type { IConfig, TAction } from "../types";
import type { ISnake } from "./types";
import { genFruit } from "../game-actions";

export const useData = () => {
    const [state, dispatch] = useReducer((state: IConfig & ISnake, action: TAction) => {
        const newState = { ...state };

        switch (action.type) {
            case "SET_DIRECTION":
                newState.prevDirection = state.direction;
                newState.direction = action.payload;
                newState.gameState = "playing";
                break;
            case "MOVE":
                const { direction, head, fruit } = state;

                if(!fruit) {
                    const newFruit = genFruit(head, state.tail, state.matrixSize);
                    newState.fruit = newFruit;
                }

                switch (direction) {
                    case "up":
                        newState.head = {
                            ...head,
                            y: head.y - 1
                        };
                        break;
                    case "down":
                        newState.head = {
                            ...head,
                            y: head.y + 1
                        };
                        break;
                    case "left":
                        newState.head = {
                            ...head,
                            x: head.x - 1
                        };
                        break;
                    case "right":
                        newState.head = {
                            ...head,
                            x: head.x + 1
                        };
                        break;
                }
        }

        return newState;
    }, {
        ...config,
        head: { x: (Math.round(config.matrixSize / 2) + 1), y: Math.round(config.matrixSize / 2) + 1 },
        tail: [],
        fruit: null,
        score: 0
    });


    return { dispatch, state };
}