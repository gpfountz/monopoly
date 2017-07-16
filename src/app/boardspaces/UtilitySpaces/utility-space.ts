import { BoardSpace } from "app/boardspaces/board-space";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { Board } from "app/board";

export class UtilitySpace implements BoardSpace {
    protected board: Board;
    protected owner: Player;
    protected group: BoardPosition[];
    protected mortgaged: boolean;
    protected purchasePrice: number;

    constructor(board: Board) {
        this.board = board;
        this.owner = undefined;
        this.mortgaged = false;
    }

    public getOwner(): Player {
        return this.owner;
    }

    public passOver(player: Player) {
    }

    public landOn(player: Player) {
        if (this.owner === undefined) {
            // attempt to buy the property
            if (player.getBalance() >= this.purchasePrice) {
                player.decreaseBalance(this.purchasePrice);
                this.owner = player;
            }
        } else if (this.owner.getToken() === player.getToken()) {
            // landed on my own property, nothing happens
        } else if (this.mortgaged) {
            // nothing happens if property is mortgaged
        } else if (this.owner !== undefined) {
            // pay the property owner rent
            let rent = player.getDiceValue() * 4;
            if (this.board.getCountOwnedInGroup(this.group) > 0) {
                rent = player.getDiceValue() * 10;
            }
            player.decreaseBalance(rent);
            this.owner.increaseBalance(rent);
        }
    }
}
