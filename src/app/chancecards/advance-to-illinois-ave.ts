import { BoardPosition } from 'app/board-positions.enum';
import { Dice } from 'app/dice';
import { Board } from 'app/board';
import { Card } from './../card';
import { CardBase } from 'app/card-base';
import { Player } from "app/player";

export class AdvanceToIllinoisAve extends CardBase implements Card {

    constructor() {
        super("Advance To Illinois Ave");
    }

    play(board: Board, player: Player) {
        this.advanceTo(board, player, BoardPosition.IllinoisAve);
    }
}
