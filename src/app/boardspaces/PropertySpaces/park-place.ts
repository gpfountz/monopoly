import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class ParkPlace extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.Boardwalk];
        this.purchasePrice = 350;
        this.rent = 35;
    }
}
