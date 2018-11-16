import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ruteador: Router;
  constructor(unRuteador: Router) {
      this.ruteador = unRuteador;
   }

  ngOnInit() {
  }

  entrar(): void{
    //si el nombre de usuario y password correcto
    //entonces navegar a consultar libros
    //this.ruteador.navigate(['libros/consultar']); como es una cadena tambien se puede
    this.ruteador.navigate(['libros','consultar']);
  }
}
