import { BoardSpace } from "app/boardspaces/board-space";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { Board } from "app/board";

/** base class for rail roads */
export class RailRoadSpace implements BoardSpace {
    protected board: Board;
    protected owner: Player;
    protected group: BoardPosition[];
    protected mortgaged: boolean;
    protected purchasePrice: number;

    constructor(board: Board, group: BoardPosition[]) {
        this.board = board;
        this.owner = undefined;
        this.mortgaged = false;
        this.purchasePrice = 200;
        this.group = group;
    }

    /** returns the player that owns this railroad */
    getOwner(): Player {
        return this.owner;
    }

    /** no affect */
    public passOver(player: Player) {
    }

    /** 
     * if unowned, player will buy this railroad.
     * if owned by another player, pay other player 25,50,100,200 depending if other player owns 1,2,3,4 rail roads.
     */
    public landOn(player: Player, option?: any) {
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
