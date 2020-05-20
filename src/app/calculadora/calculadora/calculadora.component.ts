import {Component, OnInit} from '@angular/core';
import {CalculadoraService} from "../services";

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private x: string;
  private y: string;
  private resultado: number;
  private operacao: string;

  //a injecao de dependencia ocorre no construtor da classe
  constructor(private calculadoraService: CalculadoraService) {
  }

  ngOnInit(): void {
    this.limpar()
  }

  /**
   * Adiciona numero selecionado para calculo posterior
   * @param valor
   */
  adicionarNumero(valor:string):void
  {
    if(this.operacao == null)
    {
      this.x = this.concatenarNumero(this.x,valor);
    }
    else {
      this.y = this.concatenarNumero(this.y,valor);
    }
  }

  /**
   * Realiza a limpeza da variaveis da calculadora
   */
  limpar(): void {
    this.x = '0';
    this.y = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Realiza a concatenação de digitos
   * tratamento de valores decimais
   * @param atual
   * @param novo
   * @returns {string}
   */
  concatenarNumero(atual: string, novo: string): string {
    //caso o valor atual seja 0 ou nulo, reiniciar o valor
    if (atual == '0' || atual == null) {
      atual = '';
    }

    //caso atual seja vazio e o novo sej '.', concatenar o numero 0
    if (novo == '.' && atual == '') {
      novo = '0.'
    }

    //caso o novo seja '.' e já exista '.' não faça nada
    if (novo == '.' && atual.indexOf('.') > -1) {
      novo = '';
    }
    return atual + novo;
  }

  /**
   * Realiza a seleção de um operador
   * caso já possua uma operação selecionada, executa a operação anterior,
   * e define a nova operação
   * @param operacao
   */
  definirOperacao(operacao: string): void {
    if (this.operacao == null) {
      this.operacao = operacao;
    }

    //caso o y seja diferente de nulo, deve-se executar o calculo da operação selecionada
    if (this.y !== null) {
      this.calcular();
      this.operacao = operacao;
      this.x = this.resultado.toString();
      this.y = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o calculo de uma operação caso existam todos os parametros
   */
  calcular(): void {
    //aborta o calculo caso não existe valor para y
    if (this.y == null) {
      return
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.x),
      parseFloat(this.y),
      this.operacao
    );

  }

  /**
   * Retorno o valor a ser exibido na tela da calculadora
   * @returns {string}
   */
  get display(): string {
    let retorno: string = this.x;
    if (this.resultado !== null) {
      retorno = this.resultado.toString();
    }else if (this.y !== null) {
      retorno = this.y;
    }

    return retorno;
  }
}
