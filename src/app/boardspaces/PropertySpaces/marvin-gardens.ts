import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class MarvinGardens extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.AtlanticAve,BoardPosition.VentnorAve];
        this.purchasePrice = 280;
        this.rent = 24;
    }
}
