import { Shape } from './Shape';

export class Triangle implements Shape {
    constructor(public base: number, public height: number){
    }

    getArea(): number {
        return (this.base * this.height) / 2;
    }

    getPerimeter(): number{
        const ipothenuse = Math.sqrt((Math.pow(this.base/2, 2) + Math.pow(this.height, 2)));
        return this.base + (2 * ipothenuse);
    }
}