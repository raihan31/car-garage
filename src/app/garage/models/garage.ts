import { Car } from '../../car/models/car';

export class Garage {
    id: number;
    cars: Car[];
    constructor(data: any) {
        this.id = data.id;
        this.cars = data.cars;
    }
}
