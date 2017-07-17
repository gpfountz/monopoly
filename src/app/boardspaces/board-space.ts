import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { PlayerToken } from "app/player-tokens.enum";
import { Board } from "app/board";

export interface BoardSpace {
    /** gets the owner of this space or undefined if not owned by any player */
    getOwner(): Player;

    /** method to define what happens when a player lands on this space */
    landOn(player: Player);

    /** method to define what happens when a player passes over this space */
    passOver(player: Player);
}
