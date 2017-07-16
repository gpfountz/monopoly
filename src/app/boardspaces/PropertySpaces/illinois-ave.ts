import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class IllinoisAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.KentuckyAve,BoardPosition.IndianaAve];
        this.purchasePrice = 240;
        this.rent = 20;
    }
}
