import { Player } from 'app/player';
import { BoardPosition } from 'app/board-positions.enum';
import { Dice } from 'app/dice';
import { Board } from 'app/board';
import { Card } from './card';
export abstract class CardBase implements Card {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract play(board: Board, player: Player);

    /**
     * advance player to board position, setting the players position
     * 
     * @param board 
     * @param playerToken 
     * @param position 
     */
    protected advanceTo(board: Board, player: Player, position: BoardPosition, option?: any) {
        let currentPosition: BoardPosition = player.getPosition();
        while (currentPosition != position) {
            // move forward one position and landon
            currentPosition = (currentPosition + 1) % 40;
            board.passOver(player, currentPosition);
        };
        // reached target position
        player.setPosition(currentPosition);
        board.landOn(player, currentPosition, option);
    }
}
