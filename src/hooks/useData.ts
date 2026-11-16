import { useContext } from "react";
import { Context } from "../App";
import type { IConfig, TAction } from "../types";
import type { IGame, ISnake } from "./types";

export const useData = () => {
    const context = useContext<null | {
        state: IConfig & ISnake & IGame,
        dispatch: React.ActionDispatch<[action: TAction]>
    }>(Context);


    return context
}