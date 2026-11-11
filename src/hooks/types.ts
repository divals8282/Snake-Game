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

