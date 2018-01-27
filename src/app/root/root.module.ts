import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GarageModule } from '../garage/garage.module';
import { RootComponent } from './components/root.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimaryComponent } from './components/primary/primary.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule.forRoot(),
    GarageModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    PrimaryComponent,
    FooterComponent,
  ],
  exports: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    PrimaryComponent,
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
