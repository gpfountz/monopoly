import { Player } from './../player';
import { BoardPosition } from 'app/board-positions.enum';
import { BoardSpace } from './board-space';

export class LuxuryTax implements BoardSpace {

    position: BoardPosition = BoardPosition.LuxuryTax;

    skipOver(player: Player) {
    }

    landOn(player: Player) {
        player.decreaseBalance(75);
    }
}
