import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';
import { Board } from "app/board";

export class Go implements BoardSpace {
    private board: Board;
    private owner: Player = undefined;
    private position: BoardPosition = BoardPosition.Go;

    constructor(board: Board) {
        this.board = board;
    }

    public getOwner(): Player {
        return this.owner;
    }
    public passOver(player: Player) {
        player.increaseBalance(200);
    };

    public landOn(player: Player) {
        player.increaseBalance(200);
    }
}
