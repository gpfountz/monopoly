import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class AtlanticAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.VentnorAve,BoardPosition.MarvinGardens];
        this.purchasePrice = 260;
        this.rent = 22;
    }
}
