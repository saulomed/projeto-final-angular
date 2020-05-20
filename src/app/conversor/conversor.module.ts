import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ConversorComponent} from './components';
import {ConversorService, MoedaService} from "./services";
import {NumeroDirective} from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';
import {ConversorRoutingComponent} from "./conversor-routing.component";
import {ConversorRountingModule} from "./conversor-routing.module";


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRountingModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]

})
export class ConversorModule {
}
