import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PrimaryComponent } from './components/primary/primary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PrimaryComponent,
  ]
})
export class RootModule { }
