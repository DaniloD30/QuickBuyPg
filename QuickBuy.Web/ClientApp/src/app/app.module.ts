import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { LoginComponent } from './usuario/login/login.component';
import { CepComponent } from './cep/cep.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutoListComponent } from './produtos/produto-list/produto.list.component';
import { ProdutoService } from './shared/produto.service';
import { GuardaRotas } from './autorizacao/guarda.rotas';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProdutoComponent,
    ProdutosComponent,
    ProdutoListComponent,
    LoginComponent,
    CepComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
   // BrowserAnimationsModule,
    //ToastModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'produto', component: ProdutosComponent, canActivate:[GuardaRotas]},
      { path: 'cep', component: CepComponent },
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
