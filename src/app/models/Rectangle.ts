import { Shape } from './Shape'

export class Rectangle implements Shape{
    constructor(public base: number, public height: number){
    }

    getArea(): number{
        return this.base * this.height;
    }

    getPerimeter(): number{
        return (this.base + this.height) * 2;
    }

}