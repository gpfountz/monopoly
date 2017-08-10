import { Board } from './board';
import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";
import { Dice } from "app/dice";

const player_max_double_move_count: number = 3;

export class Player {
    private token: PlayerToken;
    private position: BoardPosition;
    private inJail: boolean;
    private moveCount: number;
    private balance: number;
    private diceValue: number;

    constructor(token: PlayerToken) {
        this.token = token;
        this.reset();
    }

    /** decreases the players cash balance by the amount */
    public decreaseBalance(amount: number) {
        this.balance -= amount;
    }

    /** 
     * rolls dice and moves dice's value.
     * if rolls a double, moves again.
     * if rolls 3 doubles in a row, goes to jail without processing 3rd roll.
     */
    public move(board: Board, dice: Dice): BoardPosition {
        this.moveCount++;
        let doubleMoveCount: number = 0;
        do {
            doubleMoveCount++;
            this.diceValue = dice.roll();
            if (dice.isDouble() && doubleMoveCount >= 3) {
                // roll 3 doubles and go directly to jail
                //console.log("player rolled 3 doubles and goes to jail");
                this.setPosition(BoardPosition.Jail);
                this.inJail = true;
                break;
            }
            let previousPosition = this.position;
            this.position = (this.position + this.diceValue) % 40;
            for (let i = 1; i < this.diceValue; i++) {
                board.passOver(this, (previousPosition + i) % 40);
            }
            //console.log("player's balance prior to landOn" + this.balance);
            board.landOn(this, this.position);
            //console.log("player's balance after to landOn" + this.balance);
        } while(dice.isDouble() && this.inJail == false);
        return this.position;
    }

    /** get's this players cash balance */
    public getBalance(): number {
        return this.balance;
    }

    /** gets the last dice rolled value */
    public getDiceValue(): number {
        return this.diceValue
    }

    /** gets the player's total times the moved in a game.  extra moves due to rolling double does not count. */
    public getMoveCount() {
        return this.moveCount;
    }

    /** return's this player's board position (enum) */
    public getPosition() {
        return this.position;
    }

    /** return's this player's player token (enum) */
    public getToken() {
        return this.token;
    }

    /** increases this players cash balance */
    public increaseBalance(amount: number) {
        this.balance += amount;
    }

    /** true if this player is in jail, not just visiting */
    public isInJail(): boolean {
        return this.inJail;
    }

    /** set's this players cash balance */
    public setBalance(value: number) {
        this.balance = value;
    }

    /** set's this players in jail status, not just visiting */
    public setInJail(value: boolean) {
        //console.log("setInJail:" + value);
        this.inJail = value;
    }

    /** set's this player's board position (enum) */
    public setPosition(position: BoardPosition) {
        this.position = position;
    }

    /** resets position, moveCount, and balance */
    public reset() {
        this.position = BoardPosition.Go;
        this.moveCount = 0;
        this.balance = 2000;
        this.inJail = false;
    }

}
