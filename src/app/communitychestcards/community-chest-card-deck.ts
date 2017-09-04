import { CardDeck } from "app/card-deck";
import { CardBase } from "app/card-base";
import { AdvanceToGo } from "app/communitychestcards/advance-to-go";
import { BankErrorInYourFavor } from "app/communitychestcards/bank-error-in-your-favor";
import { DoctorsFees } from "app/communitychestcards/doctors-fees";
import { SaleOfStock } from "app/communitychestcards/sale-of-stock";
import { GetOutOfJailFree } from "app/communitychestcards/get-out-of-jail-free";

export class CommunityChestCardDeck extends CardDeck {
    constructor() {
        let communitChestCards = Array<CardBase>();
        communitChestCards.push(new AdvanceToGo());
        communitChestCards.push(new BankErrorInYourFavor());
        communitChestCards.push(new DoctorsFees());
        communitChestCards.push(new SaleOfStock());
        communitChestCards.push(new GetOutOfJailFree());
        super(communitChestCards);
    }
}
