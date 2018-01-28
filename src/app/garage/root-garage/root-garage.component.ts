import { Component, OnInit } from '@angular/core';
import { GarageService } from '../service/garage.service';
import { Garage } from '../models/garage';
import { Car } from '../../car/models/car';

@Component({
  selector: 'app-root-garage',
  templateUrl: './root-garage.component.html',
  styleUrls: ['./root-garage.component.css']
})
export class RootGarageComponent implements OnInit {
  garage: Garage;
  constructor(private garageService: GarageService) {
    this.garage = this.garageService.newGarage();
    this.garage.cars = this.garageService.getCars();
  }

  ngOnInit() {
  }

}
