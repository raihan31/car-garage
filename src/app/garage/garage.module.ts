import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';;
import { RootGarageComponent } from './root-garage/root-garage.component';
import { CarModule } from '../car/car.module';
import { GarageService } from './service/garage.service';

@NgModule({
  imports: [
    CommonModule,
    CarModule,
    NgbModule
  ],
  declarations: [ RootGarageComponent ],
  exports: [ RootGarageComponent ],
  providers: [GarageService]
})
export class GarageModule { }
