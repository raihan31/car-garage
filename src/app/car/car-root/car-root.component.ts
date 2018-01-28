import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models/car';
import { GuidService } from '../../garage/service/guid.service';
import { GarageService } from '../../garage/service/garage.service';

@Component({
  selector: 'app-car-root',
  templateUrl: './car-root.component.html',
  styleUrls: ['./car-root.component.css']
})
export class CarRootComponent implements OnInit {

  @Input() cars: Car[];
  newCar: Car;
  constructor(private guidService: GuidService, private garageService: GarageService) {}
  ngOnInit() {
    this.newCar = new Car({id: this.guidService.getGuiid(), brand: '', model: '', fuelType: '', engine: '', mileage: '', image: ''});
  }
  deleteCar(car: Car): void {
    this.garageService.deleteCar(car);
  }

}
