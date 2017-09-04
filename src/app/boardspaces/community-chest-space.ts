import { BoardSpace } from "app/boardspaces/board-space";
import { Player } from "app/player";
import { Board } from "app/board";
import { BoardPosition } from "app/board-positions.enum";

export class CommunityChestSpace implements BoardSpace {
    private board: Board;
    private owner: Player = undefined;
    private position: BoardPosition;

    constructor(board: Board, position: BoardPosition) {
        if (position != BoardPosition.CommunityChest
            && position != BoardPosition.CommunityChest1
            && position != BoardPosition.CommunityChest2) {
                throw new Error("CommunityChestSpace created for an invalid position.");
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
         this.board.getCommunityChestCards().draw().play(
             this.board, player);
    }

    /** nothing happens when passing over Chance */
    passOver(player: Player) {
    }
}
