
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cep } from '../cep/cep';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: Http) { }
  
  bucar(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .toPromise().then(response => this.converterRespostaParaCep(response.json()));


  }

  private converterRespostaParaCep(cepNaRespota): Cep {
    let cep = new Cep();
    cep.cep = cepNaRespota.cep;
    cep.logradouro = cepNaRespota.logradouro;
    //cep.numero = cepNaRespota.numero;
    cep.complemento = cepNaRespota.complemento;
    cep.cidade = cepNaRespota.localidade;
    cep.bairro = cepNaRespota.bairro;
    cep.estado = cepNaRespota.uf;
    return cep;
  }
 
}
