import { useEffect, useState } from "react";
import { EDirection } from "./types";

export const useControls = () => {
    const [direction, setDirection] = useState<EDirection>(EDirection.IDLE);
    useEffect(() => {
        const html = document.querySelector('html');

        if(window.useControlsInUse) {
            throw new Error('useControls hook is already in use. You can only use it once in your application.');
        }
        
        window.useControlsInUse = true;
        const handler = (e: KeyboardEvent) => {
            switch (e.key) {
                case "w":
                    setDirection(EDirection.UP);
                    break;
                case "a":
                    setDirection(EDirection.LEFT);
                    break;
                case "s":
                    setDirection(EDirection.DOWN);
                    break;
                case "d":
                    setDirection(EDirection.RIGHT);
                    break;
            }
        }
        html?.addEventListener('keydown', handler);

        return () => {
            window.useControlsInUse = false;
            html?.removeEventListener('keydown', handler);
        }

    }, [])

    return direction;
}