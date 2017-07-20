import { BoardSpace } from "app/boardspaces/board-space";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { Board } from "app/board";

/** base class for properties */
export abstract class PropertySpace implements BoardSpace {
    protected board: Board;
    protected owner: Player;
    protected group: BoardPosition[];
    protected mortgaged: boolean;
    protected purchasePrice: number;
    protected rent: number;

    constructor(board: Board) {
        this.board = board;
        this.owner = undefined;
        this.mortgaged = false;
    }

    /** returns the player that owns this property */
    public getOwner(): Player {
        return this.owner;
    }

    /** no affect */
    public passOver(player: Player) {
    }

    /** 
     * if unowned, player will buy this property.
     * if owned by another player, pay other player rent.  
     * rent will be double of other player owns all properties in the group.
     */
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
            let propertyRent = this.rent;
            if (this.board.getCountOwnedInGroup(this.group, this.owner.getToken()) == this.group.length) {
                propertyRent *= 2;
            }
            player.decreaseBalance(propertyRent);
            this.owner.increaseBalance(propertyRent);
        }
    }
}
