import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";

export class Player {
    private token: PlayerToken;
    private position: BoardPosition;
    private moveCount: number;

    constructor(token: PlayerToken) {
        this.token = token;
        this.reset();
    }

    move(dice: Dice) {
        this.moveCount++;
        return (this.position + dice.roll()) % 40;    
    }

    getMoveCount() {
        return this.moveCount;
    }

    getPosition() {
        return this.position;
    }

    getToken() {
        return this.token;
    }

    setPosition(position: BoardPosition) {
        this.position = position;
    }

    reset() {
        this.position = BoardPosition.Go;
        this.moveCount = 0;
    }

}
