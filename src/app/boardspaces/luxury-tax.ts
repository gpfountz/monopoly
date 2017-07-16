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

    getOwner(): Player {
        return this.owner;
    }

    public passOver(player: Player) {
    }

    public landOn(player: Player) {
        player.decreaseBalance(75);
    }
}
