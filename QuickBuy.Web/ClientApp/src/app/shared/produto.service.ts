import { Produto } from './produto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  formData: Produto;
  readonly rootURL = 'https://localhost:5001/api/';
  //'https://localhost:5001/api/'; Visual Studio Code
  //'https://localhost:44326/api/'; Visual Studio 
  //
  list: Produto[];

  constructor(private http: HttpClient) { }

  post() {
    return this.http.post(this.rootURL + 'Produt', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + 'Produt/' + this.formData.id, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + 'Produt/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'Produt')
      .toPromise()
      .then(res => this.list = res as Produto[]);
  }


}
