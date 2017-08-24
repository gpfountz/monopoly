import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";
import { BoardPosition } from "app/board-positions.enum";

export class AdvanceToStCharlesPlace extends CardBase implements Card {
    constructor() {
        super("Advance to St. Charles Place");
    }

    play(board: Board, playerToken: PlayerToken, dice: Dice) {
        this.advanceTo(board, playerToken, BoardPosition.StCharlesPlace);
        board.landOn(
            board.getPlayer(playerToken), 
            board.getPlayer(playerToken).getPosition());
    }
}
