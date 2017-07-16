import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class StCharlesPlace extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.StatesAve,BoardPosition.VirginiaAve];
        this.purchasePrice = 140;
        this.rent = 10;
    }
}
