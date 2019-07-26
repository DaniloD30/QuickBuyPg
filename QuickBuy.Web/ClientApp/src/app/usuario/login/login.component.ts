import { Component } from "@angular/core"
import { Usuario } from "../../Modelo/Usuario";
import {Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]

})
export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;
  // injeção de dependencia 
  constructor(private router: Router) {
    this.usuario = new Usuario();
  }
  
  entrar(){
    if(this.usuario.email == "admin@solutis.com" && this.usuario.senha == "admin"){
      sessionStorage.setItem("usuario-autenticado", "1");
      alert("Logado com sucesso !")
      this.router.navigate(['/']);
      //this.usuarioAutenticado = true;
    }
    
    else{
     // localStorage.setItem("usuario-autenticado", "0");
      alert("Logue com o email admin@solutis.com e senha admin !");
    }
  }



  
}
