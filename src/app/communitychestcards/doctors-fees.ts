import { CardBase } from "app/card-base";
import { Card } from "app/card";
import { Board } from "app/board";
import { Player } from "app/player";

export class DoctorsFees extends CardBase implements Card {
    constructor() {
        super("Doctor's fees");
    }

    play(board: Board, player: Player) {
        player.decreaseBalance(50);
    }
}
