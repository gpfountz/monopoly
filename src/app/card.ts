import { Dice } from 'app/dice';
import { PlayerToken } from 'app/player-tokens.enum';
import { Board } from 'app/board';

export interface Card {

    name: string;

    play(board: Board, player: PlayerToken, dice: Dice);
}
