import { PropertySpace } from "app/boardspaces/PropertySpaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class TennesseeAve extends PropertySpace {

    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.StJamesPlace,BoardPosition.NewYorkAve];
        this.purchasePrice = 180;
        this.rent = 14;
    }
}
