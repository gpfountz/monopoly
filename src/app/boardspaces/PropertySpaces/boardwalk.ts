import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class Boardwalk extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.ParkPlace];
        this.purchasePrice = 400;
        this.rent = 50;
    }
}
