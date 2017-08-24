import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';
import { PlayerToken } from "app/player-tokens.enum";
import { Board } from "app/board";

/** used when a space is not yet defined in the game */
export class DefaultSpace implements BoardSpace {
    private board: Board;
    private owner: Player;

    constructor(board: Board) {
        this.board = board;
        this.owner = undefined;
    }

     /** always returns undefined */
    public getOwner(): Player {
        return this.owner;
    }

    /** no affect */
    public passOver(player: Player) {
    }

    /** no affect */
    public landOn(player: Player, option?: any) {
    }
}
