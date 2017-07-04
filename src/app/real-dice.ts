import { Dice } from "app/dice";

export class RealDice implements Dice {
    roll(): number {
        let min :Number = 1;
        let max :Number = 6;
        return this.getRandomInt(min, max) + this.getRandomInt(min, max);
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
