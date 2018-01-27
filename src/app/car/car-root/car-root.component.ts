import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-root',
  templateUrl: './car-root.component.html',
  styleUrls: ['./car-root.component.css']
})
export class CarRootComponent implements OnInit {

  @Input() cars: Car[];
  
  constructor() { }

  ngOnInit() {
    console.log(this.cars);
  }

}
