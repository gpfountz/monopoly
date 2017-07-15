import { Player } from './../player';
import { BoardPosition } from 'app/board-positions.enum';
import { BoardSpace } from './board-space';

export class LuxuryTax implements BoardSpace {

    position: BoardPosition = BoardPosition.LuxuryTax;

    public moveOver(player: Player) {
    }

    public landOn(player: Player) {
        player.decreaseBalance(75);
    }
}
