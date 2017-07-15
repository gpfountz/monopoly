import { PropertySpace } from "app/boardspaces/property-space";
import { BoardPosition } from "app/board-positions.enum";
import { PlayerToken } from "app/player-tokens.enum";
import { ColorGroup } from "app/color-group.enum";

export class MediteranianAve extends PropertySpace {

    constructor() {
        super();
        this.position = BoardPosition.MediteranianAve;
        this.colorGroup = ColorGroup.brown;
        this.purchasePrice = 60; // TODO
        this.rent = 60; // TODO
    }
}
