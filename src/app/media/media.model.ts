export class Media {
    public department: string;
    public name: string;
    public url: string;
    constructor(dep: string, name: string, url: string) {
        this.department = dep;
        this.name = name;
        this.url = url;

    }
}
export class Shop {
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
export class Slide {
    public id: string;
    public url: string;
    constructor(id: string, url: string) {
        this.id = id;
        this.url = url;

    }
}
export class Brand {
    public imageUrl: string;
    constructor(imageUrl: string) {
        this.imageUrl = imageUrl;

    }
}

