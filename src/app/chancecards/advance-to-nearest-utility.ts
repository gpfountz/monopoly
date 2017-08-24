import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";
import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { BoardPosition } from "app/board-positions.enum";
import { UtilitySpace } from "app/boardspaces/utility-space";
import { BoardSpace } from "app/boardspaces/board-space";

export class AdvanceToNearestUtility extends CardBase implements Card {
    constructor() {
        super("Advance token to nearest Utility");
    }

    /**
     * determine nearest utility, then move there.  if owned, pay owner 10x dice roll.
     * 
     * @param board 
     * @param playerToken 
     * @param dice 
     */
    play(board: Board, playerToken: PlayerToken, dice: Dice) {
        let nearestUtility: BoardPosition = BoardPosition.WaterWorks;
        let currentPosition: BoardPosition = board.getPlayer(playerToken).getPosition();
        if (currentPosition > BoardPosition.WaterWorks
                || currentPosition < BoardPosition.ElectricCompany) {
            nearestUtility = BoardPosition.ElectricCompany;
        }
        this.advanceTo(board, playerToken, nearestUtility, {"pay10x": true});
    }
}
