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
    
  }

  ngOnInit() {
    this.garage.cars = <Car[]>this.garageService.getCars();
    console.log(this.garage);
  }

}
