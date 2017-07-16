import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class BalticAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.MediteranianAve];
        this.purchasePrice = 60;
        this.rent = 4;
    }
}
