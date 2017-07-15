import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';

export class Go implements BoardSpace {
    position: BoardPosition = BoardPosition.Go;

    public passOver(player: Player) {
        player.increaseBalance(200);
    };

    public landOn(player: Player) {
        player.increaseBalance(200);
    }
}
