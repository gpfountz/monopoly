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

    /** always returns undefined */
    public getOwner(): Player {
        return this.owner;
    }
    
    /** player gets 200 for passing go */
    public passOver(player: Player) {
        player.increaseBalance(200);
    };

    /** player gets 200 for landing on go */
    public landOn(player: Player) {
        player.increaseBalance(200);
    }
}
