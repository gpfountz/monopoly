import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { Player } from "app/player";

export class SaleOfStock extends CardBase implements Card {
    constructor() {
        super("From sale of stock you get $50");
    }

    play(board: Board, player: Player) {
        player.increaseBalance(50);
    }
}
