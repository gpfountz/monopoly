import { Dice } from "app/dice";

export class RealDice implements Dice {
    private dieValue1: number;
    private dieValue2: number;

    roll(): number {
        let min :Number = 1;
        let max :Number = 6;
        this.dieValue1 = this.getRandomInt(min, max);
        this.dieValue2 = this.getRandomInt(min, max)
        return this.dieValue1 + this.dieValue2;
    }

    public isDouble(): boolean {
        return this.dieValue1 === this.dieValue2;
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
