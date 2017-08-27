import { Board } from "app/board";
import { Dice } from "app/dice";
import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { BoardPosition } from "app/board-positions.enum";
import { UtilitySpace } from "app/boardspaces/utility-space";
import { BoardSpace } from "app/boardspaces/board-space";
import { Player } from "app/player";

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
    play(board: Board, player: Player) {
        let nearestUtility: BoardPosition = BoardPosition.WaterWorks;
        let currentPosition: BoardPosition = player.getPosition();
        if (currentPosition > BoardPosition.WaterWorks
                || currentPosition < BoardPosition.ElectricCompany) {
            nearestUtility = BoardPosition.ElectricCompany;
        }
        this.advanceTo(board, player, nearestUtility, {"pay10x": true});
    }
}
