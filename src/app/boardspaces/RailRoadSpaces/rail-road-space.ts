import { BoardSpace } from "app/boardspaces/board-space";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { Board } from "app/board";

export class RailRoadSpace implements BoardSpace {
    protected board: Board;
    protected owner: Player;
    protected group: BoardPosition[];
    protected mortgaged: boolean;
    protected purchasePrice: number;

    constructor(board: Board) {
        this.board = board;
        this.owner = undefined;
        this.mortgaged = false;
        this.purchasePrice = 200;
    }

    getOwner(): Player {
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
            // TODO check for available balance
            if (this.getOwner() !== undefined) {
                let ownerCount = this.board.getCountOwnedInGroup(
                    this.group, this.getOwner().getToken());
                let rent = 25;
                switch(ownerCount) {
                    case 1: rent = 50; break;
                    case 2: rent = 100; break;
                    case 3: rent = 200; break;
                }
                player.decreaseBalance(rent);
                this.owner.increaseBalance(rent);
            }
        }
    }
}
