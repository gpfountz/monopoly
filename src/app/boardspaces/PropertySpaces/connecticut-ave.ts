import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class ConnecticutAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.OrientalAve,BoardPosition.VermontAve];
        this.purchasePrice = 120;
        this.rent = 8;
    }
}
