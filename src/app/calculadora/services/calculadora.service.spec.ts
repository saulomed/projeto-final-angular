import {inject, TestBed} from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1+4 = 5',inject(
    [CalculadoraService],(service:CalculadoraService) => {
      let result = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(result).toEqual(5);
    })
  );
  it('deve garantir que 1-4 = 5',inject(
    [CalculadoraService],(service:CalculadoraService) => {
      let result = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(result).toEqual(-3);
    })
  );
  it('deve garantir que 1*4 = 5',inject(
    [CalculadoraService],(service:CalculadoraService) => {
      let result = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(result).toEqual(4);
    })
  );
  it('deve garantir que 1/4 = 5',inject(
    [CalculadoraService],(service:CalculadoraService) => {
      let result = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(result).toEqual(0.25);
    })
  );

  it('deve garantir operacao invalida = 0',inject(
    [CalculadoraService],(service:CalculadoraService) => {
      let result = service.calcular(1, 4, '%');
      expect(result).toEqual(0);
    })
  );

});
