export class ShopSmall {
    public name: string;
    public brand: string;
    public imageUrl: string;
    public prevPrice: number;
    public currPrice: number;
    constructor(name: string, brand: string, imageUrl: string, pp: number, cp: number) {
        this.brand = brand ;
        this.name = name;
        this.imageUrl = imageUrl;
        this.currPrice = cp;
        this.prevPrice = pp;
    }

}
export class Acessories {
    constructor(public name: string) {
    }
}
export class Side {
    constructor(public name: string, public url: string) {
    }
}
