import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { PlayerToken } from "app/player-tokens.enum";
import { ColorGroup } from "app/color-group.enum";

export interface BoardSpace {
    position: BoardPosition;

    passOver(player: Player);

    landOn(player: Player);
}
