import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class PacificAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.NorthCarolinaAve,BoardPosition.PennsylvaniaAve];
        this.purchasePrice = 300;
        this.rent = 26;
    }
}
