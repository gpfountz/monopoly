import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";

export class Player {
    private token: PlayerToken;
    private position: BoardPosition;
    private inJail: boolean = false;
    private moveCount: number;
    private balance: number;

    constructor(token: PlayerToken) {
        this.token = token;
        this.reset();
        this.balance = 2000; // todo what balance does a player start with
    }

    decreaseBalance(amount: number) {
        this.balance -= amount;
    }

    move(dice: Dice) {
        this.moveCount++;
        let previousPosition = this.position;
        this.position = (this.position + dice.roll()) % 40;
        if (this.position < previousPosition) {
            this.increaseBalance(200);
        }
        if (this.position == BoardPosition.IncomeTax) {
            let decreaseBalance = Math.min(200, this.balance * .1);
            this.decreaseBalance(decreaseBalance);
        }
        if (this.position == BoardPosition.LuxuryTax) {
            this.decreaseBalance(75);
        }
        return this.position;
    }

    getBalance(): number {
        return this.balance;
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

    increaseBalance(amount: number) {
        this.balance += amount;
    }

    isInJail(): boolean {
        return this.inJail;
    }

    setBalance(value: number) {
        this.balance = value;
    }

    setInJail(value: boolean) {
        this.inJail = value;
    }

    setPosition(position: BoardPosition) {
        this.position = position;
    }

    reset() {
        this.position = BoardPosition.Go;
        this.moveCount = 0;
    }

}
