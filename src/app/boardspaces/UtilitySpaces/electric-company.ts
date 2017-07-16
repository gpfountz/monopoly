import { UtilitySpace } from "app/boardspaces/UtilitySpaces/utility-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class ElectricCompany extends UtilitySpace {
    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.WaterWorks]
        this.purchasePrice = 150;
    }
}
