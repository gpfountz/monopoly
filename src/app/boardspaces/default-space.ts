import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';

export class DefaultSpace implements BoardSpace {
    position: BoardPosition = undefined;

    public moveOver(player: Player) {
    }

    public landOn(player: Player) {
    }
}
