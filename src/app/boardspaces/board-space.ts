import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';

export interface BoardSpace {
    position: BoardPosition;

    moveOver(player: Player);

    landOn(player: Player);
}
