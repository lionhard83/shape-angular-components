import { Rectangle } from './Rectangle';

export class Square extends Rectangle{
    constructor(side: number) {
        super(side,side);
    }
}