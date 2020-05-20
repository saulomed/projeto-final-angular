import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent

      }
    ]
  }
]

@NgModule(
  {
    imports: [
      RouterModule.forChild(DashboardRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class DashboardRountingModule {

}
