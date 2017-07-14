import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';

export class Go implements BoardSpace {
    token: BoardPosition = BoardPosition.Go;

    skipOver(player: Player) {
        player.increaseBalance(200);
    };

    landOn(player: Player) {
        player.increaseBalance(200);
    }
}
