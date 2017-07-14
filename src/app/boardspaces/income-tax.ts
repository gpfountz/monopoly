import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';

export class IncomeTax implements BoardSpace{
    position: BoardPosition = BoardPosition.IncomeTax;

    skipOver(player: Player) {
    }

    landOn(player: Player) {
        let decreaseBalance = Math.min(200, player.getBalance() * .1);
        player.decreaseBalance(decreaseBalance);
    }

}
