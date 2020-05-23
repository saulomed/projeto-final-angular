import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ConversorService} from "../services";
import {Conversao, ConversaoResponse} from "../models";

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input()
  id:string;
  @Input()
  conversaoResponse: any;
  @Input()
  conversao: Conversao = new Conversao();
  @Output()
  onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService:ConversorService) { }

  ngOnInit(): void {
  }

  get valorConvertido():string
  {
    if(this.conversaoResponse === undefined)
    {
      return '0';
    }

    let taxa = this.conversorService.getTaxa(this.conversaoResponse, this.conversao)

    return (this.conversao.valor * taxa).toFixed(2);
  }

  novaConsulta()
  {
    this.onConfirm.emit();
  }

  get cotacaoDestino(): number
  {
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
  }

  get cotacaoOrigem(): string
  {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  get dataCotacao(): string
  {
    return new Date().toLocaleDateString();//this.conversorService.dataCotacao(this.conversaoResponse);
  }

}
