import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';;
import { CarRootComponent } from './car-root/car-root.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [CarRootComponent, CarDetailsComponent, CarFormComponent],
  exports: [CarRootComponent, CarDetailsComponent, CarFormComponent]
})
export class CarModule { }
