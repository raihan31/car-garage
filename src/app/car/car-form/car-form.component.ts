import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from '../models/car';
import { GarageService } from '../../garage/service/garage.service';
import { GuidService } from '../../garage/service/guid.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  closeResult: string;
  modalRef: any;
  @Input() car: Car;
  constructor(private modalService: NgbModal, private  garageService: GarageService, private guidService: GuidService) {}

  saveCar(): void {
      this.car.image = this.car.image || 'https://media.zigcdn.com/media/model/2018/Jan/audi-q5-right_600x300.jpg';
      this.garageService.addCar(this.car);
      this.car =  new Car({id: this.guidService.getGuiid(), brand: '', model: '', fuelType: '', engine: '', mileage: '', image: ''});
      this.modalRef.dismiss();

  }
  open(content) {
    this.modalRef = this.modalService.open(content);
  }
  ngOnInit() {
  }

}
