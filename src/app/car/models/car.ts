export class Car {
    id: number;
    brand: string;
    model: string;
    fuelType: string;
    engine: string;
    mileage: string;
    image: string;
    constructor(data: any){
        this.id = data.id;
        this.brand = data.brand;
        this.model = data.model;
        this.fuelType = data.fuelType;
        this.engine = data.engine;
        this.mileage = data.mileage;
        this.image = data.image;
    }
}
