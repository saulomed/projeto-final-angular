import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaConcluidaDirective, TarefaService} from "./shared";
import { ListarTarefaComponent } from './listar-tarefa';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CadastrarTarefaComponent } from "./cadastrar-tarefa";
import { EditarTarefaComponent } from './editar-tarefa';
import {TarefasRountingModule} from "./tarefas-rounting.module";
import {TarefasRoutingComponent} from "./tarefas-routing.component";



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRountingModule

  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
