import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora';
import {CalculadoraService} from "./services";
import {CalculadoraRountingModule} from "./calculadora-routing.module";
import {CalculadoraRoutingComponent} from "./calculadora-routing.component";


@NgModule({
  declarations: [
    CalculadoraComponent,
    CalculadoraRoutingComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRountingModule
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
