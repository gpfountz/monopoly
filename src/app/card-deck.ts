import { Card } from './card';
export abstract class CardDeck {
    private cards: Card[];

    constructor (cards: Card[]) {
        this.cards = this.shuffle(cards);
    }

    /** 
     * returns top card from deck and puts in on the bottom
     * TODO what about get out of jail card?
     */
    public draw(): Card {
        let card = this.cards.shift();
        this.cards.push(card);
        return card;
    }

    /** The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle */
    private shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

}
