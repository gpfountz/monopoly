import { Card } from './../card';
import { Dice } from 'app/dice';
import { BoardPosition } from 'app/board-positions.enum';
import { Board } from "app/board";
import { CardBase } from "app/card-base";
import { Player } from "app/player";

export class AdvanceToGo extends CardBase implements Card {

    constructor() {
        super("Advance To Go");
    }

    play(board: Board, player: Player) {
        this.advanceTo(board, player, BoardPosition.Go);
    }
}
