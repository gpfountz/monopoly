import { BoardSpace } from "app/boardspaces/board-space";
import { Board } from "app/board";
import { Player } from "app/player";
import { BoardPosition } from "app/board-positions.enum";
import { Card } from "app/card";

export class ChanceSpace implements BoardSpace {
    private board: Board;
    private owner: Player = undefined;
    private position: BoardPosition;

    constructor(board: Board, position: BoardPosition) {
        if (position != BoardPosition.Chance
            && position != BoardPosition.Chance1
            && position != BoardPosition.Chance2) {
                throw new Error("ChanceSpace created for an invalid position.");
            }
        this.position = position;
        this.board = board;
    }

    /** nobody can own Chance */
    getOwner(): Player {
        return this.owner;
    }
    
    /**
     * draw a card and play
     * 
     * @param player 
     * @param option 
     */
    landOn(player: Player, option?: any) {
         this.board.getChanceCards().draw().play(
             this.board, player);
    }

    /** nothing happens when passing over Chance */
    passOver(player: Player) {
    }
}
