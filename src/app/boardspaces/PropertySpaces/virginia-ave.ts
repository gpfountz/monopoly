import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class VirginiaAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.StCharlesPlace,BoardPosition.StatesAve];
        this.purchasePrice = 160;
        this.rent = 12;
    }
}
