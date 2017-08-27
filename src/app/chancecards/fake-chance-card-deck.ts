import { ChanceCardDeck } from "app/chancecards/chance-card-deck";
import { CardBase } from "app/card-base";
import { CardDeck } from "app/card-deck";

export class FakeChanceCardDeck extends CardDeck {

    constructor(chanceCards: CardBase[]) {
        super(chanceCards);
    }
}
