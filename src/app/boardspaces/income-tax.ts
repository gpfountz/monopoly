import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';
import { Board } from "app/board";

export class IncomeTax implements BoardSpace{
    private board: Board;
    private owner: Player = undefined;
    private position: BoardPosition = BoardPosition.IncomeTax;

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

    /** player pays 200 or 10% of their cash balance, whichever is less */
    public landOn(player: Player) {
        let decreaseBalance = Math.min(200, player.getBalance() * .1);
        player.decreaseBalance(decreaseBalance);
    }

}
