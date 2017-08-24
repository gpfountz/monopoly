import { Player } from './../player';
import { BoardPosition } from 'app/board-positions.enum';
import { BoardSpace } from './board-space';
import { Board } from "app/board";

export class LuxuryTax implements BoardSpace {
    private board: Board;
    private owner: Player = undefined;
    private position: BoardPosition = BoardPosition.LuxuryTax;

    constructor(board: Board) {
        this.board = board;
    }

     /** always returns undefined */
    getOwner(): Player {
        return this.owner;
    }

    /** no affect */
    public passOver(player: Player) {
    }

    /** player pays 75 when landing here */
    public landOn(player: Player, option?: any) {
        player.decreaseBalance(75);
    }
}
