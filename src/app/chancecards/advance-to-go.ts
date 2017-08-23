import { Card } from './../card';
import { Dice } from 'app/dice';
import { BoardPosition } from 'app/board-positions.enum';
import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";
import { CardBase } from "app/card-base";

export class AdvanceToGo extends CardBase implements Card {

    constructor() {
        super("Advance To Go");
    }

    execute(board: Board, playerToken: PlayerToken, dice: Dice) {
        this.advanceTo(board, playerToken, BoardPosition.Go);
    }
}
