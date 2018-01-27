import { Injectable } from '@angular/core';
import { Garage } from '../models/garage';
import { Car } from '../../car/models/car';
import { GuidService } from './guid.service';

@Injectable()
export class GarageService {

  constructor(private guidService: GuidService) {

  }

  getCars(): Car[]{
    let cars: Car[] = [];
    for(let mockCar of  this.mockCars() ){
      cars.push(new Car(mockCar))
    };
    return cars;
  }

  mockCars(): any[] {
    return [
      { 
        id: this.guidService.getGuiid(),
        brand: 'Audi',
        model: 'Q5',
        fuelType: 'Diesel',
        engine: '1968 CC',
        mileage: '17 Kmpl',
        image: 'https://media.zigcdn.com/media/model/2018/Jan/audi-q5-right_600x300.jpg'
      },
      { 
        id: this.guidService.getGuiid(),
        brand: 'Lexus',
        model: 'LS',
        fuelType: 'Petrol',
        engine: '2011 CC',
        mileage: '25 Kmpl',
        image: 'https://media.zigcdn.com/media/model/2017/Dec/lexus-ls-right-view_600x300.jpg'
      },
      { 
        id: this.guidService.getGuiid(),
        brand: 'Lamborghini',
        model: 'Urus',
        fuelType: 'Petrol',
        engine: '3996 CC',
        mileage: '17 Kmpl',
        image: 'https://media.zigcdn.com/media/model/2017/Dec/lamborghini-urus-right_420x210.jpg'
      },
      { 
        id: this.guidService.getGuiid(),
        brand: 'Lexus',
        model: 'NX',
        fuelType: 'Petrol',
        engine: '2499 CC',
        mileage: '18 Kmpl',
        image: 'https://media.zigcdn.com/media/model/2017/Oct/nx-right_600x300.jpg'
      },
      { 
        id: this.guidService.getGuiid(),
        brand: 'Land Rover',
        model: 'Range Rover Velar',
        fuelType: 'Diesel/Petrol',
        engine: '1997 CC',
        mileage: '17 Kmpl',
        image: 'https://media.zigcdn.com/media/model/2017/Mar/velar-right_600x300.jpg'
      }
    ]
  }


}
