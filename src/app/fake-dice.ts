import { Dice } from "app/dice";

export class FakeDice implements Dice {
    private dice: number[];
    private dieValue1: number;
    private dieValue2: number;

    constructor(dice: number[]) {
        this.dice = dice;
    }

    /** returns true if the last roll resulted in both die's having the same value */
    public isDouble(): boolean {
        return this.dieValue1 === this.dieValue2;
    }

    /** 
     * rolls dice and return the value of both die added together 
     * */
    public roll(): number {
        if (this.dice.length >= 2) {
            this.dieValue1 = Math.min(6, Math.max(1, this.dice[0]));
            this.dice.shift();
            this.dieValue2 = Math.min(6, Math.max(1, this.dice[0]));
            this.dice.shift();
            return this.dieValue1 + this.dieValue2;
        } else {
            throw new Error("Fake dice not loaded with enough values.");
        }
    }

}
