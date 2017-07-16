import { UtilitySpace } from "app/boardspaces/UtilitySpaces/utility-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class WaterWorks extends UtilitySpace {
    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.ElectricCompany]
        this.purchasePrice = 150;
    }
}
