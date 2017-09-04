import { AdvanceToIllinoisAve } from './advance-to-illinois-ave';
import { AdvanceToGo } from './advance-to-go';
import { CardBase } from 'app/card-base';
import { CardDeck } from './../card-deck';
import { AdvanceToNearestUtility } from "app/chancecards/advance-to-nearest-utility";
import { AdvanceToStCharlesPlace } from "app/chancecards/advance-to-st-charles-place";

export class ChanceCardDeck extends CardDeck {
    constructor() {
        let chanceCards = Array<CardBase>();
        chanceCards.push(new AdvanceToGo());
        chanceCards.push(new AdvanceToIllinoisAve());
        chanceCards.push(new AdvanceToNearestUtility());
        chanceCards.push(new AdvanceToStCharlesPlace());
        super(chanceCards);
    }
}
