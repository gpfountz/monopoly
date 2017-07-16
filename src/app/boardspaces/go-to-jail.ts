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
    
    getOwner(): Player {
        return this.owner;
    }
    
    landOn(player: Player) {
        player.setPosition(BoardPosition.Jail);
        player.setInJail(true);
    }

    passOver(player: Player) {
    }
}
