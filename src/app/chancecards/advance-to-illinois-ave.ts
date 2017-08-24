import { BoardPosition } from 'app/board-positions.enum';
import { Dice } from 'app/dice';
import { Board } from 'app/board';
import { PlayerToken } from 'app/player-tokens.enum';
import { Card } from './../card';
import { CardBase } from 'app/card-base';

export class AdvanceToIllinoisAve extends CardBase implements Card {

    constructor() {
        super("Advance To Illinois Ave");
    }

    play(board: Board, playerToken: PlayerToken, dice: Dice) {
        this.advanceTo(board, playerToken, BoardPosition.IllinoisAve);
        board.landOn(
            board.getPlayer(playerToken), 
            board.getPlayer(playerToken).getPosition());
    }
}
