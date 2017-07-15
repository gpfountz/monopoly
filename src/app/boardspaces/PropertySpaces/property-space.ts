import { BoardSpace } from "app/boardspaces/board-space";
import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";
import { ColorGroup } from "app/color-group.enum";
import { Player } from "app/player";

export class PropertySpace implements BoardSpace {
    position: BoardPosition;
    owner: Player;
    colorGroup: ColorGroup;
    mortgaged: boolean;
    purchasePrice: number;
    rent: number;

    constructor() {
        this.owner = undefined;
        this.mortgaged = false;
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
            let propertyRent = this.rent;
            // TODO check for extra rent if all properties in a color group are owned by same player
            player.decreaseBalance(propertyRent);
            this.owner.increaseBalance(propertyRent);
        }
    }
}
