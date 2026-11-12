import type { IPosition } from "./hooks/types";

export function genFruit(head: IPosition, tail: IPosition[], matrixSize: number) {
    let fruit: IPosition;
    
    while (true) {
        fruit = {
            x: Math.floor(Math.random() * matrixSize),
            y: Math.floor(Math.random() * matrixSize)
        };
        if (
            head.x !== fruit.x && head.y !== fruit.y && 
            !tail.some(segment => segment.x === fruit.x && segment.y === fruit.y)) {
            break;
        }
    }

    return fruit;
}