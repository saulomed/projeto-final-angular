import {RouterModule, Routes} from "@angular/router";
import {ListarTarefaComponent} from "./listar-tarefa";
import {CadastrarTarefaComponent} from "./cadastrar-tarefa";
import {EditarTarefaComponent} from "./editar-tarefa";
import {NgModule} from "@angular/core";
// import {CalculadoraRoutes} from "../calculadora/calculadora-routing.module";

export const TarefaRoutes: Routes = [
  {
    path:'tarefas',
    redirectTo:'tarefas/listar-tarefas'
  },
  {
    path:'tarefas/listar-tarefas',
    component:ListarTarefaComponent
  },
  {
    path:'tarefas/cadastrar-tarefas',
    component:CadastrarTarefaComponent
  },
  {
    path:'tarefas/editar-tarefas/:id',
    component:EditarTarefaComponent
  }

]

@NgModule(
  {
    imports: [
      RouterModule.forChild(TarefaRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class TarefasRountingModule {

}
