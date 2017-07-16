import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class IndianaAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.IllinoisAve,BoardPosition.KentuckyAve];
        this.purchasePrice = 220;
        this.rent = 18;
    }
}
