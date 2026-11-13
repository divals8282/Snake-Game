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

export interface IPosition {
    x: number;
    y: number;
}

export interface ISnake {
    head: IPosition;
    tail: IPosition[];
    fruit: IPosition | null;
    score: number;
}

export interface IGame {
    score: number;
}
