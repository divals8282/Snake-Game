import { useReducer } from "react"
import { config } from "../config"
import type { IConfig, TAction } from "../types";
import type { IGame, ISnake } from "./types";
import { genFruit } from "../game-actions";

export const useData = () => {
    const [state, dispatch] = useReducer((state: IConfig & ISnake & IGame, action: TAction) => {
        const newState = { ...state };

        switch (action.type) {
            case "SET_DIRECTION":
                newState.prevDirection = state.direction;
                newState.direction = action.payload;
                newState.gameState = "playing";
                break;
            case "FRAME":
                const { direction, head, fruit, tail } = state;

                /* generate new fruit if none exists */
                if(!fruit) {
                    const newFruit = genFruit(head, state.tail, state.matrixSize);
                    newState.fruit = newFruit;
                }
                
                /* new head position */
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

                /* head fruit collision */
                if(fruit && (head.x === fruit?.x && head.y === fruit?.y)) {
                    newState.fruit = null;
                    newState.score += 10;
                    newState.tail = [head, ...tail];
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