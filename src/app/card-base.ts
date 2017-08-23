import { Player } from 'app/player';
import { BoardPosition } from 'app/board-positions.enum';
import { Dice } from 'app/dice';
import { PlayerToken } from 'app/player-tokens.enum';
import { Board } from 'app/board';
import { Card } from './card';
export abstract class CardBase implements Card {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract execute(board: Board, PlayerToken: PlayerToken, dice: Dice);

    protected advanceTo(board: Board, playerToken: PlayerToken, position: BoardPosition) {
        let player: Player = board.getPlayer(playerToken);
        let currentPosition: BoardPosition = player.getPosition();
        while (currentPosition != position) {
            // move forward one position and landon
            currentPosition = (currentPosition + 1) % 40;
            board.passOver(player, currentPosition);
        };
        // reached target position
        player.setPosition(position);
        board.landOn(player, position);
    }
}
