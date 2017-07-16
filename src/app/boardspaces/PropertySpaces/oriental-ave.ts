import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class OrientalAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.VermontAve,BoardPosition.ConnecticutAve];
        this.purchasePrice = 100;
        this.rent = 6;
    }
}
