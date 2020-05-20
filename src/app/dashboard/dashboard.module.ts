import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DadosService} from "./dados.service";
import {DashboardRountingModule} from "./dashboard-routing.module";
import {DashboardRoutingComponent} from "./dashboard-routing.component";



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
  ],
  imports: [
    CommonModule,
    DashboardRountingModule
  ],
  exports:[
    DashboardComponent
  ],
  providers:[
    DadosService
  ]
})
export class DashboardModule { }
