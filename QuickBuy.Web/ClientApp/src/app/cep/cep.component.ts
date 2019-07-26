import { Component, OnInit } from "@angular/core";
//import { ProdutoService } from './../../shared/produto.service';
import { NgForm } from '@angular/forms';
import { CepService } from "../shared/cep.service";
import { Cep } from "./cep";

//import { ToastrService } from 'ngx-toastr';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//import { Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: "app-cep",
  templateUrl: "./cep.component.html",
  styles: []
})
export class CepComponent implements OnInit{

  cep = new Cep();

  constructor(private cepService: CepService) { }

  ngOnInit() {

  }

  buscar() {
    this.cepService.bucar(this.cep.cep)
      .then((cep: Cep) => this.cep = cep)
      .catch(() => {
        let cep = this.cep.cep;
        this.cep = new Cep();
        this.cep.cep = cep;
        alert('Não foi possível continuar a busca');
      }
      )
      
  }
}
