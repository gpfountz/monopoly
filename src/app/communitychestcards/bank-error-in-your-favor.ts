import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { Player } from "app/player";

export class BankErrorInYourFavor extends CardBase implements Card {
    
    constructor() {
        super("Bank error in yourn favor");
    }

    play(board: Board, player: Player) {
        player.increaseBalance(200);
    }
}
