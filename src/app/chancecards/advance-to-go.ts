import { Chancecard } from "app/chancecards/chancecard";
import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";

export class AdvanceToGo implements Chancecard {
    readonly desc: string;
    constructor(desc: string) {
        this.desc = desc;
    }
    draw(board: Board, player: PlayerToken) {
        
    }
}
