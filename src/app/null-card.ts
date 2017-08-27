import { Board } from "app/board";
import { Player } from "app/player";
import { CardBase } from "app/card-base";
import { BoardPosition } from "app/board-positions.enum";

export class NullCard extends CardBase {
    constructor() {
        super("Null Card");
    }

    protected advanceTo(board: Board, player: Player, position: BoardPosition, option?: any) {
    }

    play(board: Board, player: Player) {
    }
}
