/**
 * Classe de serviço responsavel pela realizaçao
 * de operações da calculadora
 *
 * @author Saulo Santos
 * @since 01/04/2020
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Definiccao de constantes de operacoes
   */
  static readonly SOMA:string = '+';
  static readonly SUBTRACAO:string = '-';
  static readonly MULTIPLICACAO:string = '*';
  static readonly DIVISAO:string = '/';

  constructor() { }

  /**
   * Metodo que realiza o calculo da operação matemática desejada
   * Suporta operações de soma, subtração, divisão e multiplicação.
   * @param x
   * @param y
   * @param operacao
   * @returns {number}
   */
  calcular(x:number,y:number,operacao:string):number
  {
    let retorno:number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        retorno = x+y;
        break;
      case CalculadoraService.SUBTRACAO:
        retorno = x-y;
        break;
      case CalculadoraService.DIVISAO:
        retorno = x/y;
        break;
      case CalculadoraService.MULTIPLICACAO:
        retorno = x*y;
        break;
      default:
        retorno = 0;
    }
    return retorno;
  }
}
