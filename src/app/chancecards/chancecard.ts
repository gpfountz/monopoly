import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";

export interface Chancecard {
    desc: string;
    draw(board: Board, player: PlayerToken);
}
