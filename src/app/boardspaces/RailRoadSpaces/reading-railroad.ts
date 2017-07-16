import { RailRoadSpace } from "app/boardspaces/RailRoadSpaces/rail-road-space";
import { BoardPosition } from "app/board-positions.enum";
import { Board } from "app/board";

export class ReadingRailroad extends RailRoadSpace {
    constructor(board: Board) {
        super(board);
        this.group = [BoardPosition.PennsylvaniaRailroad,
            BoardPosition.BandORailroad,
            BoardPosition.ShortLine]
    }
}
