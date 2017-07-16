import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class NewYorkAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.StJamesPlace,BoardPosition.TennesseeAve];
        this.purchasePrice = 200;
        this.rent = 16;
    }
}
