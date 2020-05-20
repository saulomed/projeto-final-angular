import { Injectable } from '@angular/core';
import {Tarefa} from "./tarefa.model";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * Metodo para retornar a lista de tarefas armazenadas no localStorage
   * @returns {any[]}
   */
  listarTodos():Tarefa[]
  {
    //const é utilizado para uma variavel final, ou seja que não permite alterações.
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Realiza o cadastro de uma nova tarefa
   * @param tarefa
   */
  cadastrar(tarefa:Tarefa):number
  {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
    return tarefa.id;
  }

  /**
   * Realiza a busca de uma tarefa por seu id
   * @param id
   */
  buscarPorId(id: number):Tarefa
  {
    const tarefas:Tarefa[] = this.listarTodos();
    return tarefas.find(t => t.id === id);
  }

  /**
   * Realiza a atualização de uma tarefa
   * @param tarefa
   */
  atualizar(tarefa:Tarefa):void
  {
    const tarefas:Tarefa[] = this.listarTodos();
    tarefas.forEach((t, idx, objs) =>
    {
      if(t.id === tarefa.id)
      {
        objs[idx] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Remover uma tarefa
   * @param id
   */
  remover(id:number):void
  {
    let tarefas:Tarefa[] = this.listarTodos();
    //filter irá filtrar os registros a partir do predicado
    tarefas = tarefas.filter(t => t.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Altera o status de uma tarefa
   * @param id
   */
  alteraStatus(id:number):void
  {
    const tarefas:Tarefa[] = this.listarTodos();
    tarefas.forEach((t, idx, objs) =>
    {
      if(t.id === id)
      {
        objs[idx].concluida = !objs[idx].concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
