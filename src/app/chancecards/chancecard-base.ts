import { Chancecard } from "app/chancecards/chancecard";
import { Board } from "app/board";
import { PlayerToken } from "app/player-tokens.enum";
import { BoardPosition } from "app/board-positions.enum";
import { Player } from "app/player";

export abstract class ChancecardBase implements Chancecard {
    desc: string;
    abstract draw(board: Board, PlayerToken: PlayerToken);
    protected advanceTo(board: Board, playerToken: PlayerToken, position: BoardPosition) {
        // TODO get player from token
        let player: Player =  board.getPlayer(playerToken);
        while(player.getPosition() != position) {
            player.setPosition((player.getPosition() + 1) % 40);

        };

        for (let i = 1; i < this.diceValue; i++) {
            board.passOver(this, (previousPosition + i) % 40);
        }
        board.landOn(player, this.position);
    }
}
