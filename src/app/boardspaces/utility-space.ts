import { BoardSpace } from "app/boardspaces/board-space";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";
import { Board } from "app/board";

/** base case for utility spaces */
export class UtilitySpace implements BoardSpace {
    protected board: Board;
    protected owner: Player;
    protected group: BoardPosition[];
    protected mortgaged: boolean;
    protected purchasePrice: number;

    constructor(board: Board, group: BoardPosition[], purchasePrice: number) {
        this.board = board;
        this.owner = undefined;
        this.mortgaged = false;
        this.group = group;
        this.purchasePrice = purchasePrice;
    }

    /** returns the player that owns this ulitity */
    public getOwner(): Player {
        return this.owner;
    }

    /** no affect */
    public passOver(player: Player) {
    }

    /** 
     * if unowned, player will buy this utility.
     * if owned by another player, pay other player 4x value of dice.
     * if owned by another player who owns both utilities, pay other player 10x value of dice.
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
            let rent = player.getDiceValue() * 4;
            if (this.board.getCountOwnedInGroup(this.group) == this.group.length
                    || (option !== undefined && option.pay10x !== undefined && option.pay10x == true)) {
                rent = player.getDiceValue() * 10;
            }
            player.decreaseBalance(rent);
            this.owner.increaseBalance(rent);
        }
    }
}
