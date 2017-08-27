import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { Dice } from "app/dice";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";

export class AdvanceToStCharlesPlace extends CardBase implements Card {
    constructor() {
        super("Advance to St. Charles Place");
    }

    play(board: Board, player: Player) {
        this.advanceTo(board, player, BoardPosition.StCharlesPlace);
    }
}
