import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';
import { PlayerToken } from "app/player-tokens.enum";
import { ColorGroup } from "app/color-group.enum";

export class DefaultSpace implements BoardSpace {
    position: BoardPosition = undefined;

    public passOver(player: Player) {
    }

    public landOn(player: Player) {
    }
}
