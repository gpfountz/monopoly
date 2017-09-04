import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { Player } from "app/player";

export class GetOutOfJailFree extends CardBase implements Card {
    constructor() {
        super("Get Out of Jail Free");
    }

    play(board: Board, player: Player) {
        player.addCommunityChestGetOutOfJailFreeCard();
    }
}
