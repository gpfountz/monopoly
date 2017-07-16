import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { PlayerToken } from "app/player-tokens.enum";
import { Board } from "app/board";

export interface BoardSpace {
    getOwner(): Player;

    landOn(player: Player);

    passOver(player: Player);
}
