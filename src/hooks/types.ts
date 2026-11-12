declare global {
    interface Window {
        useControlsInUse?: boolean;
    }
}

export enum EDirection {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    IDLE = 'idle'
}

export interface ISnake {
    head: { x: number; y: number };
    tail: { x: number; y: number }[];
    fruit: { x: number; y: number } | null;
    score: number;
}

