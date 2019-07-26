import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from '../../shared/produto.service';
import { Produto } from '../../Modelo/Produto';

@Component({
  selector: 'produto-list',
  templateUrl: './produto.list.component.html',
  styles: []
})
export class ProdutoListComponent implements OnInit {

  constructor(private service: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Produto) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id) {
    if (confirm('Tem certeza que deseja deletar esse produto ?')) {
      this.service.deletePaymentDetail(id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          alert('Deletado com sucesso');
          //this.toastr.warning('Deletado com sucesso', 'Cadastro dos Produtos');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
