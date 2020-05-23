import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Conversao, ConversaoResponse} from "../models";

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação
  //private readonly BASE_URL = "http://api.fixer.io/latest";
  //private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=2fc9f64240f2ba9750646d684cd1da3d";
  private readonly BASE_URL = "https://free.currconv.com";
  private readonly METHOD_URL = "/api/v7/convert";
  private readonly OTHER_PARAMS_URL = "&compact=ultra&apiKey=5a268ff79106007f1fa4";

  constructor(private http: HttpClient) {}
  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
    // Na linha abaixo altere a '?' por '&'
    // let params = `&base=${conversao.moedaOrigem}&symbols=${conversao.moedaDestino}`;
    let params = `?q=${conversao.moedaOrigem}_${conversao.moedaDestino}`;
    return this.http
      .get(this.BASE_URL+ this.METHOD_URL+params + this.OTHER_PARAMS_URL);
    // No Angular 6 as duas próximas linha não são mais necessárias
    //.map(response => response.json() as ConversaoResponse)
    //.catch(error => Observable.throw(error));
  }
  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse,
              conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    let taxa = this.getTaxa(conversaoResponse, conversao);
    return taxa;
  }
  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: any,
            conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    let taxa = this.getTaxa(conversaoResponse, conversao);
    return (1 / taxa)
      .toFixed(4);
  }
  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }

  /**
   * Recupera a taxa da resposta do webservice
   * @param conversaoResponse
   * @param conversao
   */
  getTaxa(conversaoResponse: any, conversao: Conversao):number
  {
    if (conversaoResponse === undefined) {
      return 0;
    }
    let query: string = `${conversao.moedaOrigem}_${conversao.moedaDestino}`
    let taxa:number = conversaoResponse[query]
    return taxa;
  }
}
