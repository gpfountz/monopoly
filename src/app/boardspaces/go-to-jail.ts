import { BoardSpace } from "app/boardspaces/board-space";
import { Player } from "app/player";
import { Board } from "app/board";
import { BoardPosition } from "app/board-positions.enum";

export class GoToJail implements BoardSpace {
    private board: Board;
    private owner: Player = undefined;

    constructor(board: Board) {
        this.board = board;
    }
    
    /** always returns undefined */
    getOwner(): Player {
        return this.owner;
    }
    
    /** sends player to jail without passing go */
    landOn(player: Player, option?: any) {
        player.setPosition(BoardPosition.Jail);
        this.board.getJailhouse().addInmate(player.getToken());
    }

    /** no affect */
    passOver(player: Player) {
    }
}
