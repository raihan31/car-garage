import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootComponent } from './root/components/root.component';
import { RootModule } from './root/root.module';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    RootModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
