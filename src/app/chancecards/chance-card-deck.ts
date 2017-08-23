import { AdvanceToIllinoisAve } from './advance-to-illinois-ave';
import { AdvanceToGo } from './advance-to-go';
import { CardBase } from 'app/card-base';
import { CardDeck } from './../card-deck';

export class ChanceCardDeck extends CardDeck {
    constructor() {
        let chanceCards = Array<CardBase>();
        chanceCards.push(new AdvanceToGo());
        chanceCards.push(new AdvanceToIllinoisAve());
        super(chanceCards);
    }
}
