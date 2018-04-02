import { Component, OnInit } from '@angular/core';
import { DbLibroService } from '../libros/shared/db-libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = '';
  password = '';

  result: any;
  message: any;
  rol: String;

  conectado: boolean = false;

  constructor(private db_libros: DbLibroService, public router: Router) { }

  ngOnInit() {

    this.db_libros.getUsername().then(user => this.user = user).catch(error => console.log(error));
    this.db_libros.getUser().then(rol => {

      this.rol = rol;
      if (this.rol != null)
        this.conectado = true;

    }).catch(error => console.log(error));

  }

  /*----------- INICIO LOGIN/LOGOUT ---------*/

  doLogin() {
    console.log(this.user + ' - ' + this.password + ' - ');

    this.db_libros.login(this.user, this.password).subscribe(data => {

      this.message = 'Login Ok';
      this.conectado = true;
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
      this.conectado = false;
      this.router.navigate(['/biblioTK/start']);
    }, error => {
      console.error(error);
      this.message = JSON.stringify(error);
    });
  }

  /*----------- FIN LOGIN/LOGOUT ---------*/

  printRolScreen(rol) {

    this.rol = rol;

    if (rol == 'ROLE_BIBLIOTECARIO')
      this.router.navigate(['/biblioTK/lista-libro']);
    else if (rol == 'ROLE_ENCARGADO_PRESTAMOS')
      this.router.navigate(['/biblioTK/libros-prestamo', { name: this.user }]);

  }

  toPrincipal(rol) {

    if (this.rol == 'ROLE_BIBLIOTECARIO')
      this.router.navigate(['/biblioTK/lista-libro']);
    else if (this.rol == 'ROLE_ENCARGADO_PRESTAMOS')
      this.router.navigate(['/biblioTK/libros-prestamo', { name: this.user }]);

  }


  selectBiblioteca(biblioteca: string) {
    console.log(biblioteca);
  }
}

