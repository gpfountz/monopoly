import { BoardPosition } from 'app/board-positions.enum';
import { Player } from './../player';
import { BoardSpace } from './board-space';
import { PlayerToken } from "app/player-tokens.enum";
import { Board } from "app/board";

export class DefaultSpace implements BoardSpace {
    private board: Board;
    private owner: Player = undefined;

    constructor(board: Board) {
        this.board = board;
    }

    public getOwner(): Player {
        return this.owner;
    }

    public passOver(player: Player) {
    }

    public landOn(player: Player) {
    }
}
