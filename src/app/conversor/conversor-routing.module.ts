import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ConversorRoutingComponent} from "./conversor-routing.component";
import {ConversorComponent} from "./components";

export const ConversorRoutes: Routes = [
  {
    path: 'conversor-moedas',
    component: ConversorRoutingComponent,
    children: [
      {
        path: '',
        component: ConversorComponent

      }
    ]
  }
]

@NgModule(
  {
    imports: [
      RouterModule.forChild(ConversorRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class ConversorRountingModule {

}
