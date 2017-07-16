import { BoardPosition } from "app/board-positions.enum";
import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { Board } from "app/board";

export class MediteranianAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.BalticAve];
        this.purchasePrice = 60;
        this.rent = 2;
    }
}
