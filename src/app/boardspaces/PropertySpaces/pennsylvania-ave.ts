import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class PennsylvaniaAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.PacificAve,BoardPosition.NorthCarolinaAve];
        this.purchasePrice = 320;
        this.rent = 28;
    }
}
