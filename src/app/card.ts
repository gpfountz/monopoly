import { Dice } from 'app/dice';
import { Board } from 'app/board';
import { Player } from "app/player";

export interface Card {

    name: string;

    play(board: Board, player: Player);
}
