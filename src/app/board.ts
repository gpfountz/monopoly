import { LuxuryTax } from './boardspaces/luxury-tax';
import { DefaultSpace } from './boardspaces/default-space';
import { IncomeTax } from './boardspaces/income-tax';
import { Go } from './boardspaces/go';
import { BoardSpace } from './boardspaces/board-space';
import { BoardPosition } from 'app/board-positions.enum';

export class Board {
    private boardSpaceMap: Map<BoardPosition, BoardSpace> = new Map<BoardPosition, BoardSpace>();

    constructor() {
        this.boardSpaceMap.set(BoardPosition.Go, new Go());
        this.boardSpaceMap.set(BoardPosition.IncomeTax, new IncomeTax());
        this.boardSpaceMap.set(BoardPosition.LuxuryTax, new LuxuryTax());
    }

    public getBoardSpace(position: BoardPosition): BoardSpace {
        let boardSpace: BoardSpace = this.boardSpaceMap.get(position);
        if (boardSpace === undefined) {
            boardSpace = new DefaultSpace();
        }
        return boardSpace;
    }
}
