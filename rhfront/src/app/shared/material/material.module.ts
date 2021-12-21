import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';


//Aquí exportamos e importamos módulos de Material 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [MatToolbarModule],
  providers: []
})
export class MaterialModule { }
