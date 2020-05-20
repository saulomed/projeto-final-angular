import {inject, TestBed} from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import {Tarefa} from "./tarefa.model";

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Deve garantir o cadastrado de uma tarefa",
    inject([TarefaService], (service:TarefaService) =>
    {
      let countInit = service.listarTodos().length;
      let tarefa = new Tarefa();
      tarefa.nome = "TESTE";
      tarefa.concluida = false;
      let id = service.cadastrar(tarefa);
      expect(service.listarTodos().length).toEqual(countInit+1);
    })
  );

  it("Deve garantir o cadastrado de uma tarefa de nome = TESTE",
    inject([TarefaService], (service:TarefaService) =>
    {
      let countInit = service.listarTodos().length;
      let tarefa = new Tarefa();
      tarefa.nome = "TESTE";
      tarefa.concluida = false;
      let id = service.cadastrar(tarefa);
      expect(service.buscarPorId(id).nome).toEqual("TESTE");
    })
  );

  it("Deve garantir a remoção de uma tarefa",
    inject([TarefaService], (service:TarefaService) =>
    {
      let countInit = service.listarTodos().length;
      let tarefa = new Tarefa();
      tarefa.nome = "TESTE";
      tarefa.concluida = false;
      let id = service.cadastrar(tarefa);
      service.remover(id);
      expect(service.listarTodos().length).toEqual(countInit);
    })
  );
});
