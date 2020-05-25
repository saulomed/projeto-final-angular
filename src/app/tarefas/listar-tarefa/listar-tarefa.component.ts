import { Component, OnInit } from '@angular/core';
import {Tarefa, TarefaService} from "../shared";

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService:TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos():Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa:Tarefa):void
  {
    $event.preventDefault();
    if(confirm('Deseja realmente remover a tarefa "'+tarefa.nome+'"?'))
    {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa:Tarefa,$event):void
  {
    let status = confirm('Deseja realmente alterar o status da tarefa "'+tarefa.nome+'"?');
    if(status)
    {
      this.tarefaService.alteraStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
    else {
      $event.preventDefault();
    }
  }
}
