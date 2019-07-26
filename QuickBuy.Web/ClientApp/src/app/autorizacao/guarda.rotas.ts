import { Injectable } from "@angular/core";

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
@Injectable({
  providedIn: 'root'
  //Configura a classe para ela ser injetada em algum lugar
})

export class GuardaRotas implements CanActivate {
  //Classe que controlara o acesso a alguma rota

  constructor(private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   // throw new Error("Method not implemented.");
    var autenticado =  sessionStorage.getItem("usuario-autenticado");
    
    if(autenticado == "1"){
     // alert("Entrou no autenticado 1 ");
     return true;
    }
    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url} });
    alert('Faça o login para vizualizar esta página de produtos!');
    return false;
    
   
  
   
  }
 
  
    

}
