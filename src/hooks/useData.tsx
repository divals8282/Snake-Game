import { createContext, useContext, useReducer } from "react"
import { config } from "../config"
import type { IConfig, TAction } from "../types";
import type { IGame, ISnake } from "./types";
import { genFruit } from "../game-actions";

export const initialGameState: ISnake & IGame = {
    head: { x: (Math.round(config.matrixSize / 2) + 1), y: Math.round(config.matrixSize / 2) + 1 },
    tail: [],
    fruit: null,
    score: 0
}

export const Context = createContext(initialGameState);

export const useData = () => {
    const store = useContext(Context);
    const [state, dispatch] = useReducer((state: IConfig & ISnake & IGame, action: TAction) => {
        let newState = { ...state };

        switch (action.type) {
            case "SET_DIRECTION":
                newState.direction = action.payload;
                newState.gameState = "playing";
                break;
            case "GAME_STATE":
                newState.gameState = action.payload
                break;
            case "FRAME":
                const { direction, head, fruit, tail } = state;

                /* generate new fruit if none exists */
                if (!fruit) {
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

                /* head wall collision */
                if (newState.head.x < 0 || newState.head.x >= config.matrixSize || newState.head.y < 0 || newState.head.y >= config.matrixSize) {
                    newState.gameState = "gameover";
                    break;
                }

                /* tail collision */
                for (let i = 0; i < newState.tail.length; i++) {
                    const segment = newState.tail[i];
                    if (newState.head.x === segment.x && newState.head.y === segment.y) {
                        newState.gameState = "gameover";
                        break;
                    }
                }

                /* head fruit collision */
                if (fruit && (head.x === fruit?.x && head.y === fruit?.y)) {
                    newState.fruit = null;
                    newState.score += 10;
                    newState.tail = [head, ...tail];
                }

                /* tail reconstruction */
                if (newState.tail.length > 0) {
                    if (newState.head.x !== newState.tail[0].x || newState.head.y !== newState.tail[0].y) {
                        const tailReconstructed = newState.tail.map((segment, index) => {
                            if (index === 0) {
                                return head;
                            }

                            segment = newState.tail[index - 1];

                            return segment;
                        })

                        newState.tail = tailReconstructed;
                    }
                }
                break;
        }

        return newState;
    }, {
        ...config,
        ...store
    });


    return { dispatch, state };
}