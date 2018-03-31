import { Component, OnInit } from '@angular/core';
import { DbLibroService } from '../libros/shared/db-libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ingresado: boolean = false;

  user = '';
  password = '';

  result: any;
  message: any;
  rol: String;

  constructor(private db_libros: DbLibroService, public router: Router) { }

  ngOnInit() {
    this.db_libros.getUser().then(result => this.estadoUsuario(result)).catch(error => console.log(error));
    this.db_libros.getUsername().then(user => this.user = user).catch(error => console.log(error));
  }

  /*----------- INICIO LOGIN/LOGOUT ---------*/

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.db_libros.login(this.user, this.password).subscribe(data => {
      this.message = 'Login Ok';
      this.ingresado = true;
      //this.router.navigate(['/biblioTK/lista-libro']);
      this.db_libros.getUser().then(result => this.printRolScreen(result)).catch(error => console.log(error));
    }, error => {
      console.error(error);
      this.message = JSON.stringify(error);
    });

  }

  logout() {
    this.db_libros.logout().subscribe(data => {
      this.message = 'Logout Ok';
      this.ingresado = false;
    }, error => {
      console.error(error);
      this.message = JSON.stringify(error);
    });
  }

  /*----------- FIN LOGIN/LOGOUT ---------*/

  printRolScreen(rol) {

    if (rol === 'ROLE_BIBLIOTECARIO')
      this.router.navigate(['/biblioTK/lista-libro']);
    else if (rol === 'ROLE_ENCARGADO_PRESTAMOS')
      this.router.navigate(['/biblioTK/libros-prestamo', { name: this.user }]);

  }

  estadoUsuario(rol) {
    this.rol = rol;
    if( rol === null )
      this.ingresado = false;
    else{
      this.ingresado = true;
      //this.printRolScreen(rol);
    }
  }
}

