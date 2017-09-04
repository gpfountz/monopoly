import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";

export class AdvanceToGo extends CardBase implements Card {
    constructor() {
        super("Advance To Go");
    }

    play(board: Board, player: Player) {
        this.advanceTo(board, player, BoardPosition.Go);
    }
}
