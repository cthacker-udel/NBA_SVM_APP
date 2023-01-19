import type { Player } from "src/@types/player";

export type CurrentPlayerContextInterface = {
    player: Player;
    setPlayer: (_player: Player) => void;
};
